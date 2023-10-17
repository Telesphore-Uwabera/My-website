import {
    defineJQueryPlugin,
    emulateTransitionEnd,
    getElementFromSelector,
    getTransitionDurationFromElement
  } from './index'
  import Data from './data'
  import EventHandler from './event-handler'
  import BaseComponent from './base-component'
  
  
  const NAME = 'alert'
  const DATA_KEY = 'bs.alert'
  const EVENT_KEY = `.${DATA_KEY}`
  const DATA_API_KEY = '.data-api'
  
  const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]'
  
  const EVENT_CLOSE = `close${EVENT_KEY}`
  const EVENT_CLOSED = `closed${EVENT_KEY}`
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`
  
  const CLASS_NAME_ALERT = 'alert'
  const CLASS_NAME_FADE = 'fade'
  const CLASS_NAME_SHOW = 'show'
  
  
  class Alert extends BaseComponent {
  
    static get DATA_KEY() {
      return DATA_KEY
    }
  
  
    close(element) {
      const rootElement = element ? this._getRootElement(element) : this._element
      const customEvent = this._triggerCloseEvent(rootElement)
  
      if (customEvent === null || customEvent.defaultPrevented) {
        return
      }
  
      this._removeElement(rootElement)
    }
  
  
    _getRootElement(element) {
      return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`)
    }
  
    _triggerCloseEvent(element) {
      return EventHandler.trigger(element, EVENT_CLOSE)
    }
  
    _removeElement(element) {
      element.classList.remove(CLASS_NAME_SHOW)
  
      if (!element.classList.contains(CLASS_NAME_FADE)) {
        this._destroyElement(element)
        return
      }
  
      const transitionDuration = getTransitionDurationFromElement(element)
  
      EventHandler.one(element, 'transitionend', () => this._destroyElement(element))
      emulateTransitionEnd(element, transitionDuration)
    }
  
    _destroyElement(element) {
      if (element.parentNode) {
        element.parentNode.removeChild(element)
      }
  
      EventHandler.trigger(element, EVENT_CLOSED)
    }
  
  
    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data.get(this, DATA_KEY)
  
        if (!data) {
          data = new Alert(this)
        }
  
        if (config === 'close') {
          data[config](this)
        }
      })
    }
  
    static handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault()
        }
  
        alertInstance.close(this)
      }
    }
  }
  
  
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()))
  
  
  defineJQueryPlugin(NAME, Alert)
  
  export default Alert
  