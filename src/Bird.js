import Base from './Base'

class Bird {
  constructor(options) {
    var wrap = document.querySelector(options.el)
    
    wrap.innerHTML = options.template
    this.randers()
  }

  /**
   * @param {string} template 
   * @param {object} data
   */
  component(name, options) {
    class Temp extends Base {
      getOptions() {
        return options
      }
    }
    document.registerElement(name, Temp)
  }

  randers() {
  }
}

window.Bird = Bird
export default Bird
