import Base from './base'

class Bird {
  constructor(options) {
    this.wrap = document.querySelector(options.el)
    this.wrap.innerHTML = options.template
    this.customEventHost = document.createElement('div')
    this.randers()
  }

  /**
   * @param {string} template
   * @param {object} data
   */
  component(name, options) {
    class Temp extends Base {
      constructor() {
        super()
      }
      getOptions() {
        return options
      }
    }
    customElements.define(name, Temp)
  }

  setTemplate(template) {
    this.wrap.innerHTML = template
  }

  randers() {
    //Do nothing
  }

  on(name, callback) {
    const { customEventHost } = this
    customEventHost.addEventListener(name, function(e) {
      e.preventDefault()
      e.stopPropagation()
      callback(e.detail)
    })
  }

  trigger(name, args) {
    const { customEventList, customEventHost } = this
    var event = new CustomEvent(name, {
      'detail': args
    });
    customEventHost.dispatchEvent(event)
  }
}

export default Bird
