import { renderStyles } from "visual/utils/cssStyle";

export function style(v, vs, vd) {
  const styles = {
    ".brz &&:hover": {
      standart: ["cssStyleSizeWidth"]
    },

    ".brz &&:hover:before": {
      standart: [
        "cssStyleBorder",
        "cssStyleBorderRadius",
        "cssStyleBoxShadow",
        "cssStyleBgColor",
        "cssStyleBgGradient"
      ],
      interval: ["cssStyleHoverTransition"]
    },

    ".brz &&:hover:after": {
      standart: ["cssStyleSizeHeightPercentOnly"]
    }
  };

  return renderStyles({ v, vs, vd, styles });
}
