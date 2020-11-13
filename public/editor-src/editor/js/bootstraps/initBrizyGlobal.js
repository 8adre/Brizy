import Config from "visual/global/Config";
import { addFilter, applyFilter } from "visual/utils/filters";
import { t } from "visual/utils/i18n";
import { setIds, isGlobalPopup, IS_STORY } from "visual/utils/models";
import {
  getOptionColorHexByPalette,
  getAnimations,
  getDynamicContentChoices,
  getDynamicContentByPlaceholder,
  getShapes
} from "visual/utils/options";
import {
  hexToRgba,
  getColorPaletteColors,
  getColorPaletteColor,
  makeRichTextColorPaletteCSS
} from "visual/utils/color";
import {
  getFontById,
  getUsedFonts,
  getUsedFontsDetails,
  getFontStyles,
  getFontStyle,
  weightTypes,
  getWeight,
  getWeightChoices,
  makeSubsetGoogleFontsUrl,
  makeRichTextFontGoogleCSS,
  makeRichTextFontUploadCSS,
  makeRichTextFontStylesCSS
} from "visual/utils/fonts";
import {
  defaultValueValue,
  defaultValueKey,
  tabletSyncOnChange,
  mobileSyncOnChange,
  onChangeTypography,
  onChangeTypographyMobile
} from "visual/utils/onChange";
import {
  toolbarColor2,
  toolbarColorHexField2,
  toolbarFilterHue,
  toolbarFilterSaturation,
  toolbarFilterBrightness,
  toolbarFilterContrast,
  toolbarCustomCSS,
  toolbarLinkPopup,
  toolbarLinkUpload,
  toolbarElementAudioUpload,
  toolbarElementAudioIconSize
} from "visual/utils/toolbar";
import { NORMAL, HOVER } from "visual/utils/stateMode";
import {
  IS_SINGLE_TEMPLATE,
  IS_ARCHIVE_TEMPLATE,
  IS_PRODUCT_TEMPLATE,
  IS_PRODUCT_ARCHIVE_TEMPLATE,
  IS_PRODUCT_PAGE
} from "visual/utils/env";

global.Brizy = {
  config: Config,
  addFilter,
  applyFilter,
  t,
  utils: {
    stateMode: {
      NORMAL,
      HOVER
    },

    setIds,
    isGlobalPopup,
    IS_STORY,

    getAnimations,
    getDynamicContentChoices,
    getDynamicContentByPlaceholder,
    getShapes,

    getOptionColorHexByPalette,
    hexToRgba,
    getColorPaletteColors,
    getColorPaletteColor,
    makeRichTextColorPaletteCSS,

    getFontById,
    getUsedFonts,
    getUsedFontsDetails,
    getFontStyles,
    getFontStyle,
    weightTypes,
    getWeight,
    getWeightChoices,
    makeSubsetGoogleFontsUrl,
    makeRichTextFontGoogleCSS,
    makeRichTextFontUploadCSS,
    makeRichTextFontStylesCSS,

    defaultValueValue,
    defaultValueKey,
    tabletSyncOnChange,
    mobileSyncOnChange,
    onChangeTypography,
    onChangeTypographyMobile,
    NORMAL,
    HOVER,

    IS_SINGLE_TEMPLATE,
    IS_ARCHIVE_TEMPLATE,
    IS_PRODUCT_TEMPLATE,
    IS_PRODUCT_ARCHIVE_TEMPLATE,
    IS_PRODUCT_PAGE
  },
  toolbar: {
    toolbarColor2,
    toolbarColorHexField2,
    toolbarFilterHue,
    toolbarFilterSaturation,
    toolbarFilterBrightness,
    toolbarFilterContrast,
    toolbarCustomCSS,
    toolbarLinkPopup,
    toolbarLinkUpload,
    toolbarElementAudioUpload,
    toolbarElementAudioIconSize
  }
};
