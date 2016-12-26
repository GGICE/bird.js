class Base extends HTMLElement {
  constructor() {
    super()
  }

  createdCallback() {
    this._rander()
  }

  attachedCallback() {
    window.console.log('attachedCallback')
  }
  
  detachedCallback() {
    window.console.log('detachedCallback')
  }

  attributeChangedCallback(name, oldVal, newVal) {
    window.console.log(name, oldVal, newVal)
  }

  _rander() {
    if(!this._shadow) {
      this._shadow = this.createShadowRoot()
    }
    this._shadow.innerHTML = this.getTemplate()
  }

}

export default Base