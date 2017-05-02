import Btp from './btp'
import logs from './common/logs'


class Base extends HTMLElement {
  constructor() {
    super()
  }

  createdCallback() {
    this.init()
  }

  attachedCallback() {
    const {
      attached
    } = this

    attached && attached.apply(this)
  }

  detachedCallback() {
    const {
      removed
    } = this

    removed && removed.apply(this)
  }

  attributeChangedCallback(name, oldVal, newVal) {
    const {
      attributeChanged
    } = this

    attributeChanged && attributeChanged.apply(this, name, oldVal, newVal)
    if (oldVal === null && this.initData &&
      JSON.stringify(this.initData[name]) === newVal) {
      //跳过初始时的reRender
      return
    }
    this.reRender(name)
  }

  init() {
    const options = this.getOptions()
    const {
      template,
      data,
      created,
      styles,
      rendered
    } = options

    this.initShadowEL()
    if (!template) {
      this.template = null
    } else {
      this.template = template
    }
    if (!data) {
      this.data = null
    } else {
      this.data = data
      this.initData = Object.assign({}, data)
    }
    this.applyAttrToData()
    this.styles = styles
    this.rendered = rendered
    this.btp = new Btp()
    this.bindAttr()
    this.render()
    created && created.apply(this)
  }

  parse() {
    return this.btp.parse(this)
  }

  initShadowEL() {
    this.tempShadow = document.createElement('div').createShadowRoot()
    this.shadow = this.createShadowRoot()
  }

  applyAttrToData() {
    const data = this.getAttribute('b-model')
    this.data = Object.assign({}, this.data, JSON.parse(data || '{}'))
  }

  applyDataToAttr(data) {
    for (var key in data) {
      this.setAttribute(key, JSON.stringify(data[key]))
    }
  }

  /**
   * 绑定data到Attribute
   */
  bindAttr() {
    const {
      data
    } = this
    this.applyDataToAttr(data)
  }

  /**
   * 操作data的方法
   */
  setData(data) {
    this.data = Object.assign(this.data, data)
    this.applyDataToAttr(data)
  }

  render() {
    this.shadow.innerHTML = this.parse()
    this.bindEvents()
    this.rendered && this.rendered()
  }

  reRender() {
    this.tempShadow.innerHTML = this.parse()
    this.diffAsyn(this.tempShadow, this.shadow)
    this.rendered && this.rendered()
  }

  /**
   *  需要支持增删改
   *  1.改  done
   *  2.增  done
   *  3.删  done
   */
  diff(newDom, oldDom) {
    if (newDom.innerHTML === oldDom.innerHTML) {
      return logs.log('diff Same!')
    }
    var oldNodes = this.getEls(oldDom.childNodes)
    var newNodes = this.getEls(newDom.childNodes)
    var oldLength = oldNodes.length
    var newLength = newNodes.length
    var length = Math.min(newLength, oldLength)
    var i
    //ADD TODO: support key
    if(newLength > oldLength) {
      for(i = oldLength; i < newLength; i++ ) {
        oldDom.appendChild(newNodes[i])
      }
    }
    //Remove TODO: support key
    if(newLength < oldLength) {
      for(i = oldLength; i > newLength ; i-- ) {
        oldDom.removeChild(oldNodes[i - 1])
      }
    }
    //Change
    for(i = 0; i < length; i++) {
      if (newNodes[i].outerHTML === oldNodes[i].outerHTML) {
        continue
      }

      if(newNodes[i].tagName !== oldNodes[i].tagName) {
        oldDom.replaceChild(newNodes[i], oldNodes[i])
        continue
      }

      if (this.getEls(newNodes[i].childNodes).length > 0) {
        this.diffAsyn(newNodes[i], oldNodes[i])
      } else {
        oldDom.replaceChild(newNodes[i], oldNodes[i])
      }
    }
  }

  diffAsyn(newDom, oldDom) {
    return new Promise((resolve) => {
      this.diff(newDom, oldDom)
      resolve()
    })
  }

  getEls(nodeList) {
    return [].filter.call(nodeList, function(node){
      return node.nodeType === 1
    })
  }

  /**
   * 绑定事件的方法，需要在render之后执行
   */
  bindEvents() {
    var els = this.shadow
    this.buildChildEvents(els)
  }

  buildChildEvents(fEl) {
    [].forEach.call(fEl.childNodes, (el) => {
      if (el.attributes && el.attributes.length > 0) {
        [].forEach.call(el.attributes, (attr) => {
          var funName = attr.value.match(/function\[(\w+)\]/)
          var eventName, funText

          if (!funName || !funName[1]) {
            return
          }
          funText = this.data[funName[1]]
          eventName = attr.name.replace('on-', '').toLowerCase()
          if (funText) {
            el.addEventListener(eventName, funText.bind(this))
          }
        })
      }
      this.buildChildEvents(el)
    })
  }

}

export default Base
