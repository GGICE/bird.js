import Text from './Text'

class Bird {
  constructor(options: {el: string, template: string}) {
    var wrap = document.querySelector(options.el)
    
    wrap.innerHTML = options.template
    this.randers()
  }

  components = []

  component(name: string, options: Object) {
    this.components.push({
      name,
      options
    })
    console.log(this.components)
  }
  
  randers() {
    (<any>document).registerElement('b-text', Text);
  }
}



export default Bird
