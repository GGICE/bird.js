class Text extends HTMLElement {
  constructor() {
    super()
  }

  createShadowRoot

  _shadow

  createdCallback() {
    this._rander()
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
    this._rander()
  }

  _rander() {
    if(!this._shadow) {
      console.log('Create new shadow!')
      this._shadow = this.createShadowRoot()
    }
    this._shadow.innerHTML = this.getAttribute('text')
  }

}

export default Text