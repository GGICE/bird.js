class Text extends HTMLElement {
  constructor() {
    super()
  }

  createShadowRoot

  createdCallback() {
    console.log(this)
    var shadow = this.createShadowRoot()
    shadow.innerHTML = this.getAttribute('text')

    setTimeout(()=>{
      this.setAttribute('text', 'haha')
    }, 2000)
  }

  attachedCallback() {
    console.log('attachedCallback')
  }
  
  detachedCallback() {
    console.log('detachedCallback')
  }

  attributeChangedCallback(name, oldVal, newVal) {
     console.log(name, oldVal, newVal)
  }

}

export default Text