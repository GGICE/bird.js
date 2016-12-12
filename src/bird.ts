class Bird {
  constructor(options: {el: string, template: string}) {
    var wrap = document.querySelector(options.el)
    wrap.innerHTML = options.template
  }
  
  component(name: string, options: Object) {
    console.log(options)
  }
  
  create(options) {
    
  }
  
  parse() {
     
  }
  
  hello() {
    console.log('Hello bird.js')
    console.log(this)
  }
}

export default Bird
