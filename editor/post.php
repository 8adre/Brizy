<?php if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

class Brizy_Editor_Post extends Brizy_Editor_Entity {

	use Brizy_Editor_AutoSaveAware;

	const BRIZY_POST = 'brizy-post';
	const BRIZY_POST_NEEDS_COMPILE_KEY = 'brizy-need-compile';
	const BRIZY_POST_SIGNATURE_KEY = 'brizy-post-signature';
	const BRIZY_POST_HASH_KEY = 'brizy-post-hash';
	const BRIZY_POST_EDITOR_VERSION = 'brizy-post-editor-version';
	const BRIZY_POST_COMPILER_VERSION = 'brizy-post-compiler-version';
	const BRIZY_POST_PLUGIN_VERSION = 'brizy-post-plugin-version';

	static protected $instance = null;

	/**
	 * @var string
	 */
	protected $compiled_html;

	/**
	 * @var array
	 */
	protected $compiled_scripts;

	/**
	 * @var array
	 */
	protected $compiled_styles;

	/**
	 * @var string
	 */
	protected $compiled_html_body;

	/**
	 * @var string
	 */
	protected $compiled_html_head;

	/**
	 * @var bool
	 */
	protected $needs_compile;

	/**
	 * Json for the editor.
	 *
	 * @var string
	 */
	protected $editor_data;

	/**
	 * @var bool
	 */
	protected $uses_editor;

	/**
	 * @var string
	 */
	protected $editor_version;

	/**
	 * @var string
	 */
	protected $compiler_version;

	/**
	 * @var string
	 */
	protected $plugin_version;

	/**
	 * Brizy_Editor_Post2 constructor.
	 *
	 * @param $postId
	 *
	 * @throws Exception
	 */
	public function __construct( $postId ) {
		parent::__construct( $postId );

		// create the uid if the editor is enabled for this post
		if ( $this->uses_editor() ) {
			$this->createUid();
		}
	}

	/**
	 * @param $apost
	 *
	 * @return Brizy_Editor_Post|mixed
	 * @throws Exception
	 */
	public static function get( $apost ) {

		$wp_post_id = $apost;
		if ( $apost instanceof WP_Post ) {
			$wp_post_id = $apost->ID;
		}

		if ( isset( self::$instance[ $wp_post_id ] ) ) {
			return self::$instance[ $wp_post_id ];
		}

		return self::$instance[ $wp_post_id ] = new self( $wp_post_id );
	}

	/**
	 * @param $postId
	 *
	 * @return Brizy_Editor_Block|Brizy_Editor_Post|mixed
	 * @throws Exception
	 */
	public function duplicateTo( $postId ) {
		$newPost = parent::duplicateTo( $postId );

		// copy current data to new post
		$newPost->set_template( $this->get_template() );

		$storage = $this->getStorage();

		$newStorage = $newPost->getStorage();
		$newStorage->loadStorage( $storage->get_storage() );
		$newPost->loadInstanceData();
		$newPost->saveStorage();

		return $newPost;

	}


	/**
	 * Clear all cached instances;
	 */
	public static function cleanClassCache() {
		self::$instance = array();
	}

	/**
	 * @return string
	 */
	public function serialize() {
		$get_object_vars = get_object_vars( $this );

		unset( $get_object_vars['wp_post_id'] );
		unset( $get_object_vars['wp_post'] );
		unset( $get_object_vars['api_page'] );
		unset( $get_object_vars['store_assets'] );
		unset( $get_object_vars['assets'] );

		return serialize( $get_object_vars );
	}


	/**
	 * @param $data
	 */
	public function unserialize( $data ) {
		parent::unserialize( $data ); // TODO: Change the autogenerated stub
	}

	public function createResponse( $fields = array() ) {

		$p_id      = (int) $this->getWpPostId();
		$the_title = get_the_title( $p_id );

		$global = array(
			'title'       => $the_title,
			'slug'        => sanitize_title( $the_title ),
			'data'        => $this->get_editor_data(),
			'id'          => $p_id,
			'is_index'    => false,
			'template'    => get_page_template_slug( $p_id ),
			'status'      => get_post_status( $p_id ),
			'url'         => get_the_permalink( $p_id ),
			'dataVersion' => $this->getCurrentDataVersion()
		);

		return $global;
	}


	public function convertToOptionValue() {

		return array(
			'compiled_html'                    => $this->get_encoded_compiled_html(),
			'compiled_scripts'                 => $this->getCompiledScripts(),
			'compiled_styles'                  => $this->getCompiledStyles(),
			'compiled_html_body'               => $this->get_compiled_html_body(),
			'compiled_html_head'               => $this->get_compiled_html_head(),
			'editor_version'                   => $this->editor_version,
			'compiler_version'                 => $this->compiler_version,
			'plugin_version'                   => $this->plugin_version,
			'editor_data'                      => $this->editor_data,
			Brizy_Editor_Constants::USES_BRIZY => $this->uses_editor
		);
	}


	/**
	 *  Mark all brizy post that needs compile
	 */
	public static function mark_all_for_compilation() {
		global $wpdb;
		$wpdb->update( $wpdb->postmeta, array( 'meta_value' => 1 ), array( 'meta_key' => self::BRIZY_POST_NEEDS_COMPILE_KEY ) );
	}


	public function savePost( $createRevision = false ) {

		$content = $this->get_compiled_page()->get_body() ? $this->get_compiled_page()->get_body() : '<div class="brz-root__container"></div>';
		$content .= '<!-- version:' . time() . ' -->';

		$this->deleteOldAutosaves( $this->getWpPostParentId() );

		if ( $createRevision ) {

			$post_type        = $this->getWpPost()->post_type;
			$post_type_object = get_post_type_object( $post_type );
			$can_publish      = current_user_can( $post_type_object->cap->publish_posts );
			$post_status      = $this->getWpPost()->post_status;

			$params = [
				'ID'           => $this->getWpPostId(),
				'post_content' => $content
			];

			if ( $can_publish ) {
				$params['post_status'] = $post_status;
			}

			wp_update_post( $params );

		} else {
			global $wpdb;

			$wpdb->update(
				$wpdb->posts,
				[ 'post_content' => $content ],
				[ 'ID' => $this->getWpPostId() ],
				[ '%s' ]
			);
		}

		$this->createUid();
	}

	/**
	 * @param int $autosave
	 *
	 * @return bool|Brizy_Editor_Entity
	 */
	public function save( $autosave = 0 ) {

		parent::save( $autosave );

		if ( $autosave == 0 ) {
			$this->saveStorage();
		} else {
			$this->auto_save_post( $this->getWpPost(), function ( $autosaveObject ) {
				$autosavePost = $this->populateAutoSavedData( $autosaveObject );
				$autosavePost->saveStorage();
			} );
		}

		return true;
	}

	/**
	 * @return bool
	 * @throws Brizy_Editor_Exceptions_ServiceUnavailable
	 * @throws Exception
	 */
	public function compile_page() {

		Brizy_Logger::instance()->notice( 'Compile page', array( $this ) );
		$compiledData             = Brizy_Editor_User::get()->compile_page( Brizy_Editor_Project::get(), $this );
		$compiledData['pageHtml'] = Brizy_SiteUrlReplacer::hideSiteUrl( $compiledData['pageHtml'] );

		foreach ( $compiledData['pageScripts'] as $i => $set ) { //pro || free
			foreach ( $set as $k => $scripts ) { // groups
				if ( $k == 'libsSelectors' ) {
					continue;
				}
				if ( $k == 'main' ) {
					$compiledData['pageScripts'][ $i ][ $k ]['content'] = Brizy_SiteUrlReplacer::hideSiteUrl( $compiledData['pageScripts'][ $i ][ $k ]['content'] );
				}

				foreach ( $scripts as $l => $script ) {
					$compiledData['pageScripts'][ $i ][ $k ][ $l ]['content'] = Brizy_SiteUrlReplacer::hideSiteUrl( $script['content'] );
				}

			}
		}
		foreach ( $compiledData['pageStyles'] as $i => $set ) {
			foreach ( $set as $k => $styles ) {
				if ( $k == 'libsSelectors' ) {
					continue;
				}
				if ( $k == 'main' ) {
					$compiledData['pageStyles'][ $i ][ $k ]['content'] = Brizy_SiteUrlReplacer::hideSiteUrl( $compiledData['pageStyles'][ $i ][ $k ]['content'] );
				}
				foreach ( $styles as $l => $style ) {
					$compiledData['pageStyles'][ $i ][ $k ][ $l ]['content'] = Brizy_SiteUrlReplacer::hideSiteUrl(
						$style['content']
					);
				}
			}
		}

		$this->set_compiled_html( $compiledData['pageHtml'] );
		$this->set_compiled_html_head( null );
		$this->set_compiled_html_body( null );
		$this->set_needs_compile( false );
		$this->set_compiler_version( BRIZY_EDITOR_VERSION );
		$this->setCompiledScripts( $compiledData['pageScripts'] );
		$this->setCompiledStyles( $compiledData['pageStyles'] );

		return true;
	}


	/**
	 * @return string
	 */
	public function get_compiled_html() {
		return $this->compiled_html;
	}

	/**
	 * @param string $compiled_html
	 *
	 * @return Brizy_Editor_Post
	 */
	public function set_compiled_html( $compiled_html ) {
		$this->compiled_html = $compiled_html;

		return $this;
	}

	/**
	 * @return array
	 */
	public function getCompiledScripts() {
		return $this->compiled_scripts;
	}

	/**
	 * @param array $compiled_scripts
	 *
	 * @return Brizy_Editor_Post
	 */
	public function setCompiledScripts( $compiled_scripts ) {
		$this->compiled_scripts = $compiled_scripts;

		return $this;
	}

	/**
	 * @return array
	 */
	public function getCompiledStyles() {
		return $this->compiled_styles;
	}

	/**
	 * @param array $compiled_styles
	 *
	 * @return Brizy_Editor_Post
	 */
	public function setCompiledStyles( $compiled_styles ) {
		$this->compiled_styles = $compiled_styles;

		return $this;
	}


	/**
	 * @param $compiled_html
	 *
	 * @return $this
	 */
	public function set_encoded_compiled_html( $compiled_html ) {

		if ( ( $decodedData = base64_decode( $compiled_html, true ) ) !== false ) {
			$this->set_compiled_html( $decodedData );
		} else {
			$this->set_compiled_html( $compiled_html );
		}

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_encoded_compiled_html() {

		return base64_encode( $this->get_compiled_html() );
	}

	/**
	 * @return string
	 * @deprecated use get_compiled_html
	 */
	public function get_compiled_html_body() {
		return $this->compiled_html_body;
	}

	/**
	 * @return string
	 * @deprecated use get_compiled_html
	 */
	public function get_compiled_html_head() {
		return $this->compiled_html_head;
	}

	/**
	 * @param $html
	 *
	 * @return $this
	 * @deprecated use set_compiled_html
	 *
	 */
	public function set_compiled_html_body( $html ) {
		$this->compiled_html_body = $html;

		return $this;
	}

	/**
	 * @param $html
	 *
	 * @return $this
	 * @deprecated use set_compiled_html
	 *
	 */
	public function set_compiled_html_head( $html ) {
		// remove all title and meta tags.
		$this->compiled_html_head = $html;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_editor_data() {

		if ( ( $decodedData = base64_decode( $this->editor_data, true ) ) !== false ) {
			return $decodedData;
		}

		return $this->editor_data;
	}

	/**
	 * @param $content
	 *
	 * @return $this
	 */
	public function set_editor_data( $content ) {

		if ( base64_decode( $content, true ) !== false ) {
			$this->editor_data = $content;
		} else {
			$this->editor_data = base64_encode( $content );
		}

		return $this;
	}

	/**
	 * @return $this
	 * @throws Brizy_Editor_Exceptions_AccessDenied
	 */
	public function enable_editor() {

		if ( ! $this->can_edit_posts() ) {
			throw new Brizy_Editor_Exceptions_AccessDenied( 'Current user cannot edit page' );
		}

		$this->set_uses_editor( true );

		return $this;
	}

	/**
	 * @return $this
	 * @throws Brizy_Editor_Exceptions_AccessDenied
	 */
	public function disable_editor() {
		if ( ! $this->can_edit_posts() ) {
			throw new Brizy_Editor_Exceptions_AccessDenied( 'Current user cannot edit page' );
		}

		$this->set_uses_editor( false );

		return $this;
	}

	/**
	 * @param string $editor_version
	 */
	public function set_editor_version( $editor_version ) {
		$this->editor_version = $editor_version;
		update_metadata( 'post', $this->getWpPostId(), self::BRIZY_POST_EDITOR_VERSION, $editor_version );
	}

	/**
	 * @param string $compiler_version
	 */
	public function set_compiler_version( $compiler_version ) {
		$this->compiler_version = $compiler_version;
		update_metadata( 'post', $this->getWpPostId(), self::BRIZY_POST_COMPILER_VERSION, $compiler_version );
	}

	/**
	 * @param string $plugin_version
	 */
	public function set_plugin_version( $plugin_version ) {
		$this->plugin_version = $plugin_version;
		update_metadata( 'post', $this->getWpPostId(), self::BRIZY_POST_PLUGIN_VERSION, $plugin_version );
	}

	/**
	 * @param $v
	 *
	 * @return $this
	 */
	public function set_needs_compile( $v ) {
		$this->needs_compile = (bool) $v;
		update_metadata( 'post', $this->getWpPostId(), self::BRIZY_POST_NEEDS_COMPILE_KEY, (bool) $v );

		return $this;
	}

	/**
	 * @return bool
	 */
	public function get_needs_compile() {
		return $this->needs_compile;
	}

	/**
	 * @return Brizy_Editor_CompiledHtml
	 */
	public function get_compiled_page() {
		return new Brizy_Editor_CompiledHtml( $this );
	}

	public function isCompiledWithCurrentVersion() {
		return $this->get_compiler_version() === BRIZY_EDITOR_VERSION;
	}


	/**
	 * @return bool
	 */
	public function uses_editor() {
		return $this->uses_editor;
	}

	/**
	 * @param $val
	 *
	 * @return $this
	 */
	public function set_uses_editor( $val ) {
		$this->uses_editor = $val;

		return $this;
	}

	/**
	 * @return array
	 */
	public function get_templates() {

		$type      = get_post_type( $this->getWpPostId() );
		$templates = array(
			array(
				'id'    => '',
				'title' => __( 'Default', 'brizy' )
			)
		);

		foreach ( wp_get_theme()->get_page_templates( null, $type ) as $key => $title ) {
			$templates[] = [
				'id'    => $key,
				'title' => $title
			];
		}

		return apply_filters( "brizy:$type:templates", $templates );
	}

	/**
	 * @param string $aTemplate
	 *
	 * @return $this
	 */
	public function set_template( $aTemplate ) {

		$aTemplate = apply_filters( 'brizy_post_template', $aTemplate );

		if ( $aTemplate == '' ) {
			delete_post_meta( $this->getWpPostId(), '_wp_page_template' );
		} else {
			update_post_meta( $this->getWpPostId(), '_wp_page_template', $aTemplate );
		}

		return $this;
	}

	/**
	 * @return mixed
	 */
	public function get_template() {
		return get_post_meta( $this->getWpPostId(), '_wp_page_template', true );
	}


	/**
	 * @return string
	 */
	public function get_compiler_version() {
		return $this->compiler_version;
	}

	/**
	 * @return string
	 */
	public function get_editor_version() {
		return $this->editor_version;
	}

	/**
	 * @return string
	 */
	public function edit_url() {
		return add_query_arg(
			array( Brizy_Editor::prefix( '-edit' ) => '' ),
			get_permalink( $this->getWpPostId() )
		);
	}

	/**
	 * @return bool
	 * @todo: Move this
	 *
	 */
	public function can_edit_posts() {
		return current_user_can( 'edit_posts' );
	}

	/**
	 * Will return the key on witch the object data will be saved in storage
	 *
	 * @return mixed
	 */
	protected function getObjectKey() {
		return self::BRIZY_POST;
	}

	/**
	 * Load all object data
	 */
	protected function loadInstanceData() {
		// get the storage values
		$storage = $this->getStorage();
		//$storageData          = $storage->get_storage();
		$using_editor_old = $storage->get( Brizy_Editor_Constants::USES_BRIZY, false );
		$storage_post     = $storage->get( $this->getObjectKey(), false );

		// check for deprecated forms of posts
		if ( $storage_post instanceof self ) {
			$this->set_editor_data( $storage_post->editor_data );
			$this->set_needs_compile( true );
			$this->set_uses_editor( $using_editor_old );
			$this->save();
		} else if ( is_array( $storage_post ) ) {

			if ( isset( $storage_post['compiled_html'] ) ) {
				$this->set_encoded_compiled_html( $storage_post['compiled_html'] );
			}
			if ( isset( $storage_post['compiled_scripts'] ) ) {
				$this->setCompiledScripts( $storage_post['compiled_scripts'] );
			}
			if ( isset( $storage_post['compiled_styles'] ) ) {
				$this->setCompiledStyles( $storage_post['compiled_styles'] );
			}

			$data_needs_compile = isset( $storage_post['needs_compile'] ) ? $storage_post['needs_compile'] : true;
			$this->set_editor_data( $storage_post['editor_data'] );
			$this->set_needs_compile( metadata_exists( 'post', $this->getWpPostId(), self::BRIZY_POST_NEEDS_COMPILE_KEY ) ? (bool) get_post_meta( $this->getWpPostId(), self::BRIZY_POST_NEEDS_COMPILE_KEY, true ) : $data_needs_compile );
			$this->set_editor_version( isset( $storage_post['editor_version'] ) ? $storage_post['editor_version'] : BRIZY_EDITOR_VERSION );
			$this->set_compiler_version( isset( $storage_post['compiler_version'] ) ? $storage_post['compiler_version'] : BRIZY_EDITOR_VERSION );
			$this->set_plugin_version( isset( $storage_post['plugin_version'] ) ? $storage_post['plugin_version'] : BRIZY_VERSION );
			$this->compiled_html_head = isset( $storage_post['compiled_html_head'] ) ? $storage_post['compiled_html_head'] : null;
			$this->compiled_html_body = isset( $storage_post['compiled_html_body'] ) ? $storage_post['compiled_html_body'] : null;
			$this->uses_editor        = (bool) ( isset( $storage_post[ Brizy_Editor_Constants::USES_BRIZY ] ) ? $storage_post[ Brizy_Editor_Constants::USES_BRIZY ] : false );
		}

		// check if the old flag is set
		if ( ! is_null( $using_editor_old ) ) {
			$this->uses_editor = (bool) $using_editor_old;
			$storage->delete( Brizy_Editor_Constants::USES_BRIZY );
			$this->saveStorage();
		}
	}

	/**
	 * @param self $autosave
	 *
	 * @return mixed
	 */
	protected function populateAutoSavedData( $autosave ) {
		$autosave->set_template( $this->get_template() );
		$autosave->set_editor_data( $this->get_editor_data() );
		$autosave->set_editor_version( $this->get_editor_version() );

		return $autosave;
	}


	public static function get_post_list( $searchTerm, $postType, $excludePostType = array() ) {

		global $wp_post_types;

		$post_query = array(
			'post_type'      => $postType,
			'posts_per_page' => - 1,
			'post_status'    => $postType == 'attachment' ? 'inherit' : array(
				'publish',
				'pending',
				'draft',
				'future',
				'private'
			),
			'orderby'        => 'post_title',
			'order'          => 'ASC'
		);

		if ( $searchTerm ) {
			$post_query['post_title_term'] = $searchTerm;
		}

		$posts = new WP_Query( $post_query );

		$result = array();

		foreach ( $posts->posts as $post ) {

			if ( in_array( $post->post_type, $excludePostType ) ) {
				continue;
			}

			$result[] = (object) array(
				'ID'              => $post->ID,
				'uid'             => self::create_uid( $post->ID ),
				'post_type'       => $post->post_type,
				'post_type_label' => $wp_post_types[ $post->post_type ]->label,
				'title'           => apply_filters( 'the_title', $post->post_title ),
				'post_title'      => apply_filters( 'the_title', $post->post_title )
			);
		}


		return $result;
	}

	private static function create_uid( $postId ) {

		$uid = get_post_meta( $postId, 'brizy_post_uid', true );

		if ( ! $uid ) {
			$uid = md5( $postId . time() );
			update_post_meta( $postId, 'brizy_post_uid', $uid );
		}

		return $uid;
	}

	/**
	 * @return WP_Post
	 * @deprecated  Use getWpPost();
	 *
	 */
	public function get_wp_post() {
		return $this->getWpPost();
	}

}

