import Parse from './Parse'
import Text from './Text'

class Bird {
  constructor(options: {el: string, template: string}) {
    var wrap = document.querySelector(options.el)
    
    wrap.innerHTML = this.parse(options.template)
  }

  components = []

  component(name: string, options: Object) {
    this.components.push({
      name,
      options
    })
    console.log(this.components)
  }
  
  parse = new Parse().parse

  randers() {
    
  }
}

Text()

export default Bird
