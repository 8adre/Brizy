import { renderStyles } from "visual/utils/cssStyle";
import { ElementModel } from "visual/component/Elements/Types";

export function styleWrapper(
  v: ElementModel,
  vs: ElementModel,
  vd: ElementModel
): [string, string, string] {
  const styles = {
    ".brz &&:hover": {
      interval: [
        "cssStyleDisplayFlex",
        "cssStyleZIndex",
        "cssStyleCustomPosition",
        "cssStyleWrapperFixedFlex",
        "cssStyleRotate"
      ]
    }
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return renderStyles({ v, vs, vd, styles });
}

export { styleAnimation } from "visual/editorComponents/Wrapper/styles";
