const { console } = window
import Btp from './Btp'


class Base extends HTMLElement {
  constructor() {
    super()
  }

  createdCallback() {
    this._init()
  }

  attachedCallback() {
    const { attached } = this
    
    attached && attached.apply(this)
  }
  
  detachedCallback() {
    const { removed } = this

    removed && removed.apply(this)
  }

  attributeChangedCallback(name, oldVal, newVal) {
    const { attributeChanged } = this
    
    attributeChanged && attributeChanged.apply(this, name, oldVal, newVal)
    if(oldVal === null && JSON.stringify(this.initData[name]) === newVal) {
      //跳过初始时的reRender
      return
    }
    this._reRender(name)
  }

  _init() {
    const options = this.getOptions()
    const { template , data, created, styles, rendered } = options
    
    this._initShadowEL()
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
      this.initData = Object.assign({}, data)
    }
    this._styles = styles
    this._rendered = rendered
    this._btp = new Btp()
    this._bindAttr()
    this._render()
    created && created.apply(this)
  }

  _parse() {
    return this._btp._parse(this)
  }
  
  _initShadowEL() {
    this._tempShadow = document.createElement('div').createShadowRoot()
    this._shadow = this.createShadowRoot()
  }
  
  _applyDataToAttr(data) {
    for(var key in data) {
      this.setAttribute(key, JSON.stringify(data[key]))
    }
  }

  /**
   * 绑定data到Attribute
   */
  _bindAttr() {
    const { data } = this
    this._applyDataToAttr(data)
  }

  /**
   * 操作data的方法
   */
  setData(data) {
    this.data = Object.assign(this.data, data)
    this._applyDataToAttr(data)
  }

  _render() {
    this._shadow.innerHTML = this._parse()
    this._bindEvents()
    this._rendered && this._rendered()
  }

  _reRender() {
    this._tempShadow.innerHTML = this._parse()
    this._diff(this._tempShadow, this._shadow)
    this._rendered && this._rendered()
  }

  /**
   *  需要支持增删改
   *  1.改  done
   *  2.增
   *  3.删
   */
  _diff(newDom, oldDom) {
    if(newDom.innerHTML === oldDom.innerHTML) {
      return console.log('diff Same!')
    }
    [].forEach.call(newDom.childNodes, (el, index) => {
      if(el.innerHTML !== oldDom.childNodes[index].innerHTML) {
        if(el.childNodes.length > 1) {
          this._diff(el, oldDom.childNodes[index])
        } else {
          oldDom.childNodes[index].innerHTML = el.innerHTML
        }
      }
    })
  }

  /**
   * 绑定事件的方法，需要在render之后执行
   */
  _bindEvents() {
    var els = this._shadow
    this._buildChildEvents(els)
  }

  _buildChildEvents(fEl) {
    [].forEach.call(fEl.childNodes, (el) => {
      if(el.attributes && el.attributes.length > 0) {
        [].forEach.call(el.attributes, (attr) => {
          var funName = attr.value.match(/function\[(\w+)\]/)
          var eventName, funText

          if(!funName || !funName[1]) {
            return
          }
          funText = this.data[funName[1]]
          eventName = attr.name.replace('on-', '').toLowerCase()
          if(funText) {
            el.addEventListener(eventName, funText.bind(this))
          }
        })  
      }
      this._buildChildEvents(el)
    })
  }

}

export default Base