import nonWP from "./index.js";
// import WPPosts from "./WordPress/WPPosts";
import WPSidebar from "./WPSidebar";
import WPCustomShortcode from "./WPCustomShortcode";
// import WOOProducts from "./WOOProducts";
// import WOOProductPage from "./WOOProductPage";
import WOOCategories from "./WOOCategories";
// import WOOAddToCart from "./WOOAddToCart";
import WOOPages from "./WOOPages";
import WOOProducts2 from "./WOOProducts2";
// import WOOCategories2 from "./WOOCategories2";

import { hasSidebars, pluginActivated } from "visual/utils/wp";
import { IS_STORY } from "visual/utils/models";

import {
  IS_SINGLE_TEMPLATE,
  IS_PRODUCT_TEMPLATE,
  IS_PRODUCT_PAGE
} from "visual/utils/env";

const wordpressShortcodes = IS_STORY
  ? []
  : [...(hasSidebars() ? [WPSidebar] : []), WPCustomShortcode];

const woocommerceShortcodes =
  !IS_STORY && pluginActivated("woocommerce")
    ? [WOOProducts2, WOOCategories, WOOPages]
    : [];

export default {
  product: [],
  ...((IS_PRODUCT_TEMPLATE || IS_PRODUCT_PAGE) && {
    woocommerce: woocommerceShortcodes
  }),
  archive: [],
  ...(IS_SINGLE_TEMPLATE && { wordpress: wordpressShortcodes }),
  ...nonWP,
  ...(!IS_SINGLE_TEMPLATE && { wordpress: wordpressShortcodes }),
  ...(!(IS_PRODUCT_TEMPLATE || IS_PRODUCT_PAGE) && {
    woocommerce: woocommerceShortcodes
  })
};
