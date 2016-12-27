import Base from './Base'
import Text from './Text'

class Bird {
  constructor(options) {
    var wrap = document.querySelector(options.el)
    
    wrap.innerHTML = options.template
    this.randers()
  }

  component(name, options) {
    var { template, data } = options
    class Temp extends Base {
      getTemplate() {
        return template
      }

      getData() {
        return data
      }

      _rander() {
        this.innerHTML = this.getTemplate()
      }
    }
    document.registerElement(name, Temp)
  }

  randers() {
    document.registerElement('b-text', Text)
  }
}

window.Bird = Bird
export default Bird
