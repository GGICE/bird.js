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
    const options = this.getOptions()
    const { template , data } = options

    this._shadow = this.createShadowRoot()
    if(!template) {
      this.template = null
      console.warn('No template!')
    } else {
      this.template = template
    }
    if(!data) {
      this.data = null
      console.warn('No data!')
    } else {
      this.data = data
    }

  }

  /**
   * 模板引擎
   */
  _parse() {
    const { template, data } = this
    var html = template.replace(/{\w*}/g, function($1){
      var key = $1.match(/\w+/)[0]
      if(data[key]) {
        return '${data.' + key + '}'
      } else {
        return ''
      }
    })
    html = '`' + html + '`'
    try {
      html = eval(html)
    } catch(e) {
      window.console.warn(e)
    }
    console.log('html', html)
    return html
  }

  _rander() {
    this._shadow.innerHTML = this._parse()
  }

}

export default Base