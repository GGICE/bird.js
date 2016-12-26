import Base from './Base'

class Bird {
  constructor(options) {
    var wrap = document.querySelector(options.el)
    
    wrap.innerHTML = options.template
    this.randers()
  }

  component(name, options) {
    var { template } = options
    class Temp extends Base {
      getTemplate() {
        return template
      }
    }
    document.registerElement(name, Temp)
  }

  randers() {
    document.registerElement('b-base', Base)
  }
}

window.Bird = Bird
export default Bird
