<?php

class Brizy_Editor_Forms_Form extends Brizy_Admin_Serializable {

	/**
	 * @var string
	 */
	protected $id;

	/**
	 * @var Brizy_Editor_Forms_AbstractIntegration[]
	 */
	protected $integrations = array();

	/**
	 * @var bool
	 */
	protected $hasEmailTemplate = false;

	/**
	 * @var string
	 */
	protected $emailTemplate;

	/**
	 * @return string
	 */
	public function serialize() {
		return serialize( $this->convertToOptionValue() );
	}


	public function unserialize( $data ) {

		$vars = unserialize( $data );

		return self::createFromSerializedData( $vars );
	}

	/**
	 * @param $data
	 *
	 * @throws Exception
	 */
	public function unserialize( $data ) {

		$vars = unserialize( $data );

		foreach ( $vars as $prop => $value ) {

			if ( $prop == 'integrations' ) {
				foreach ( $value as $integration ) {
					if ( $integration instanceof Brizy_Editor_Forms_AbstractIntegration ) {
						$this->integrations[] = $integration;
					} else {
						$brizy_editor_forms_abstract_integration = Brizy_Editor_Forms_AbstractIntegration::createInstanceFromJson( (object) $integration );
						if ( $brizy_editor_forms_abstract_integration ) {
							$this->integrations[] = $brizy_editor_forms_abstract_integration;
						}
					}
				}
			} else {
				$this->$prop = $value;
			}
		}
	}

	public function jsonSerialize() {
		$get_object_vars = array(
			'id'               => $this->id,
			'hasEmailTemplate' => $this->hasEmailTemplate(),
			'emailTemplate'    => $this->getEmailTemplate(),
			'integrations'     => $this->integrations,
		);

		foreach ( $this->integrations as $integration ) {
			$get_object_vars['integrations'][] = $integration->convertToOptionValue();
		}

		return $get_object_vars;
	}

	public function convertToOptionValue() {
		$get_object_vars = array(
			'id' => $this->id,
			'hasEmailTemplate' => $this->hasEmailTemplate(),
			'emailTemplate'    => $this->getEmailTemplate(),
		);

		foreach ( $this->integrations as $integration ) {
			$get_object_vars['integrations'][] = $integration->convertToOptionValue();
		}

		return $get_object_vars;
	}

	static public function createFromSerializedData( $data ) {
		$instance               = new self();
		$instance->id           = $data['id'];

		$instance->hasEmailTemplate = $data['hasEmailTemplate'];
		$instance->emailTemplate    = $data['emailTemplate'];

		foreach ( $data['integrations'] as $integration ) {
			$brizy_editor_forms_wordpress_integration = Brizy_Editor_Forms_AbstractIntegration::createFromSerializedData( $integration );

			if ( $brizy_editor_forms_wordpress_integration ) {
				$instance->integrations[] = $brizy_editor_forms_wordpress_integration;
			}
		}

		return $instance;
	}


	/**
	 * @return string
	 */
	public function getId() {
		return $this->id;
	}

	/**
	 * @param string $id
	 *
	 * @return Brizy_Editor_Forms_Form
	 */
	public function setId( $id ) {
		$this->id = $id;

		return $this;
	}



	/**
	 * @return Brizy_Editor_Forms_Form
	 * @throws Exception
	 */
	public static function createFromJson( $json_obj ) {
		$instance = new self();

		if ( ! isset( $json_obj ) ) {
			throw new Exception( 'Bad Request', 400 );
		}

		if ( is_object( $json_obj ) ) {

			$instance->setId( $json_obj->id );

			// add uncompleted wordpress integration
			$current_user   = wp_get_current_user();
			$an_integration = new Brizy_Editor_Forms_WordpressIntegration();
			$an_integration->setEmailTo( $current_user->user_email );

			$instance->addIntegration( $an_integration );

			foreach ( (array) $json_obj->integrations as $integration ) {
				if ( is_object( $integration ) ) {
					$instance->addIntegration( Brizy_Editor_Forms_AbstractIntegration::createInstanceFromJson( $integration ) );
				}
			}
		}

		return $instance;
	}

	/**
	 * @param Brizy_Editor_Forms_Form $instance
	 * @param $json_obj
	 *
	 * @return Brizy_Editor_Forms_Form
	 * @throws Exception
	 */
	public static function updateFromJson( Brizy_Editor_Forms_Form $instance, $json_obj ) {

		if ( ! isset( $json_obj ) ) {
			throw new Exception( 'Bad Request', 400 );
		}

		if ( is_object( $json_obj ) ) {
			$instance->setHasEmailTemplate( $json_obj->hasEmailTemplate );

			if ( $json_obj->hasEmailTemplate ) {
				$instance->setEmailTemplate( $json_obj->emailTemplate );
			} else {
				$instance->setEmailTemplate( '' );
			}
		}

		return $instance;
	}

	/**
	 * Target can be: create | update
	 *
	 * @param string $target
	 *
	 * @return array|bool
	 */
	public function validate( $target = 'create' ) {

		$errors = array();

		if ( ! $this->getId() ) {
			$errors['id'] = 'Invalid form id';
		}

		if ( $this->hasEmailTemplate && $this->getEmailTemplate() == '' ) {
			$errors['emailTemplate'] = 'Invalid email template content';
		}

		if ( count( $errors ) ) {
			return $errors;
		}

		return true;
	}

	public function getIntegrations() {
		return $this->integrations;
	}

	/**
	 * @param $id
	 *
	 * @return Brizy_Editor_Forms_AbstractIntegration|null
	 */
	public function getIntegration( $id ) {

		foreach ( $this->integrations as $integration ) {
			if ( $integration->getId() == $id ) {
				return $integration;
			}
		}

		return null;
	}

	public function addIntegration( Brizy_Editor_Forms_AbstractIntegration $anIntegration ) {

		if ( ! $anIntegration ) {
			return false;
		}

		if ( $this->getIntegration( $anIntegration->getId() ) ) {
			return false;
		}

		$this->integrations[] = $anIntegration;

		return true;
	}

	/**+
	 * @param $anIntegration
	 *
	 * @return bool
	 */
	public function updateIntegration( Brizy_Editor_Forms_AbstractIntegration $anIntegration ) {

		if ( ! $anIntegration ) {
			return false;
		}

		foreach ( $this->integrations as $k => $integration ) {
			if ( $integration->getId() == $anIntegration->getId() ) {
				$this->integrations[ $k ] = $anIntegration;

				return true;
			}
		}

		return false;
	}


	/**
	 * @param $id
	 *
	 * @return bool
	 */
	public function deleteIntegration( $id ) {

		foreach ( $this->integrations as $k => $integration ) {
			if ( $integration->getId() == $id ) {
				unset( $this->integrations[ $k ] );
				$this->integrations = array_values( $this->integrations );

				return true;
			}
		}

		return false;
	}

	/**
	 * @return bool
	 */
	public function hasEmailTemplate() {
		return $this->hasEmailTemplate;
	}

	/**
	 * @param bool $hasEmailTemplate
	 *
	 * @return Brizy_Editor_Forms_Form
	 */
	public function setHasEmailTemplate( $hasEmailTemplate ) {
		$this->hasEmailTemplate = $hasEmailTemplate;

		return $this;
	}

	/**
	 * @return string
	 */
	public function getEmailTemplate() {
		return $this->emailTemplate;
	}

	/**
	 * @param string $emailTemplate
	 *
	 * @return Brizy_Editor_Forms_Form
	 */
	public function setEmailTemplate( $emailTemplate ) {
		$this->emailTemplate = $emailTemplate;

		return $this;
	}

	/**
	 * @param $fields
	 *
	 * @return string
	 */
	public function getEmailTemplateContent( $fields ) {

		$field_string = array();
		foreach ( $fields as $field ) {
			$field_string[] = "{$field->label}: " . esc_html( $field->value );
		}

		return implode( '<br>', $field_string );
	}
}