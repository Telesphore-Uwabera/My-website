import getScrollParent from "./getScrollParent.js";
import getParentNode from "./getParentNode.js";
import getWindow from "./getWindow.js";
import isScrollParent from "./isScrollParent.js"

export default function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : 
  updatedList.concat(listScrollParents(getParentNode(target)));
}