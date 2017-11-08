import Base from './base'

class Bird {
  constructor(options) {
    this.wrap = document.querySelector(options.el)
    this.wrap.innerHTML = options.template
    this.customEventHost = document.createElement('div')
  }

  /**
   * @param {string} template
   * @param {object} data
   */
  static component(name, options) {
    class Temp extends Base {
      constructor() {
        super(options)
      }
    }
    customElements.define(name, Temp)
  }

  setTemplate(template) {
    this.wrap.innerHTML = template
  }

  on(name, callback) {
    const { customEventHost } = this
    customEventHost.addEventListener(name, (e) => {
      e.preventDefault()
      e.stopPropagation()
      callback(e.detail)
    })
  }

  trigger(name, args) {
    const { customEventHost } = this
    const event = new CustomEvent(name, {
      detail: args,
    })
    customEventHost.dispatchEvent(event)
  }
}

export default Bird
