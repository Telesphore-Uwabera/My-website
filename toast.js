import {
    defineJQueryPlugin,
    emulateTransitionEnd,
    getTransitionDurationFromElement,
    reflow,
    typeCheckConfig
  } from './index'
  import Data from './data'
  import EventHandler from './event-handler'
  import Manipulator from './manipulator'
  import BaseComponent from './base-component'
  
  const NAME = 'toast'
  const DATA_KEY = 'bs.toast'
  const EVENT_KEY = `.${DATA_KEY}`
  
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`
  const EVENT_HIDE = `hide${EVENT_KEY}`
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`
  const EVENT_SHOW = `show${EVENT_KEY}`
  const EVENT_SHOWN = `shown${EVENT_KEY}`
  
  const CLASS_NAME_FADE = 'fade'
  const CLASS_NAME_HIDE = 'hide'
  const CLASS_NAME_SHOW = 'show'
  const CLASS_NAME_SHOWING = 'showing'
  
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  }
  
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  }
  
  const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]'
  
  
  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element)
  
      this._config = this._getConfig(config)
      this._timeout = null
      this._setListeners()
    }
  
  
    static get DefaultType() {
      return DefaultType
    }
  
    static get Default() {
      return Default
    }
  
    static get DATA_KEY() {
      return DATA_KEY
    }

  
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW)
  
      if (showEvent.defaultPrevented) {
        return
      }
  
      this._clearTimeout()
  
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE)
      }
  
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING)
        this._element.classList.add(CLASS_NAME_SHOW)
  
        EventHandler.trigger(this._element, EVENT_SHOWN)
  
        if (this._config.autohide) {
          this._timeout = setTimeout(() => {
            this.hide()
          }, this._config.delay)
        }
      }
  
      this._element.classList.remove(CLASS_NAME_HIDE)
      reflow(this._element)
      this._element.classList.add(CLASS_NAME_SHOWING)
      if (this._config.animation) {
        const transitionDuration = getTransitionDurationFromElement(this._element)
  
        EventHandler.one(this._element, 'transitionend', complete)
        emulateTransitionEnd(this._element, transitionDuration)
      } else {
        complete()
      }
    }
  
    hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return
      }
  
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE)
  
      if (hideEvent.defaultPrevented) {
        return
      }
  
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE)
        EventHandler.trigger(this._element, EVENT_HIDDEN)
      }
  
      this._element.classList.remove(CLASS_NAME_SHOW)
      if (this._config.animation) {
        const transitionDuration = getTransitionDurationFromElement(this._element)
  
        EventHandler.one(this._element, 'transitionend', complete)
        emulateTransitionEnd(this._element, transitionDuration)
      } else {
        complete()
      }
    }
  
    dispose() {
      this._clearTimeout()
  
      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW)
      }
  
      super.dispose()
      this._config = null
    }
  
    _getConfig(config) {
      config = {
        ...Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      }
  
      typeCheckConfig(NAME, config, this.constructor.DefaultType)
  
      return config
    }
  
    _setListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide())
    }
  
    _clearTimeout() {
      clearTimeout(this._timeout)
      this._timeout = null
    }

  
    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data.get(this, DATA_KEY)
        const _config = typeof config === 'object' && config
  
        if (!data) {
          data = new Toast(this, _config)
        }
  
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }
  
          data[config](this)
        }
      })
    }
  }
  
  defineJQueryPlugin(NAME, Toast)
  
  export default Toast
  