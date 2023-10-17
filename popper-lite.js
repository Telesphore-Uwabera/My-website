import { popperGenerator, detectOverflow } from "./createPopper.js";
import eventListeners from "./eventListeners.js";
import popperOffsets from "./popperOffsets.js";
import computeStyles from "./computeStyles.js";
import applyStyles from "./applyStyles.js";
var defaultModifiers = [eventListeners, popperOffsets, computeStyles, applyStyles];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

export { createPopper, popperGenerator, defaultModifiers, detectOverflow };