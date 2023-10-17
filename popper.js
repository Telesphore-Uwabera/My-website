import { popperGenerator, detectOverflow } from "./createPopper.js";
import eventListeners from "./eventListeners.js";
import popperOffsets from "./popperOffsets.js";
import computeStyles from "./computeStyles.js";
import applyStyles from "./applyStyles.js";
import offset from "./offset.js";
import flip from "./flip.js";
import preventOverflow from "./preventOverflow.js";
import arrow from "./arrow.js";
import hide from "./hide.js";
var defaultModifiers = [eventListeners, popperOffsets, computeStyles, applyStyles, offset, flip, preventOverflow, arrow, hide];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

export { createPopper, popperGenerator, defaultModifiers, detectOverflow }; // eslint-disable-next-line import/no-unused-modules

export { createPopper as createPopperLite } from "./popper-lite.js"; // eslint-disable-next-line import/no-unused-modules

export * from "./modifiers/index.js";