const { console } = window

class Base extends HTMLElement {
  constructor() {
    super()
  }

  createdCallback() {
    this._init()
    this._rander()
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

  _init() {
    var { getTemplate, getData } = this

    this._shadow = this.createShadowRoot()
    if(!getTemplate) {
      this.template = null
      console.warn('No template!')
    } else {
      this.template = getTemplate()
    }
    if(!getData) {
      this.data = null
      console.warn('No data!')
    } else {
      this.data = getData()
    }
  }

  _parse() {

  }

  _rander() {
    console.log(this)
    this._shadow.innerHTML = this.template
  }

}

export default Base