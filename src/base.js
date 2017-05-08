import logs from 'common/logs'
import Btp from './btp'
import Diff from './diff'
import ID from 'common/id'

const btp = new Btp()
class Base extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['b-data']
  }

  connectedCallback() {
    this.init()
    const {
      created
    } = this

    created && created.apply(this)
  }

  adoptedCallback() {
    const {
      attached
    } = this

    attached && attached.apply(this)
  }

  disconnectedCallback() {
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

    if (!data) {
      this.data = null
    } else {
      this.data = data
      this.initData = Object.assign({}, data)
    }
    this.initShadowEL()
    this.applyAttrToData()
    this.template = template || ''
    this.styles = styles
    this.rendered = rendered
    this.created = created
    this.bindAttr()
    this.render()
  }

  parse() {
    return btp.parse(this)
  }

  initShadowEL() {
    this.tempShadow = document.createElement('div').attachShadow({
      mode: 'open'
    })
    this.shadow = this.attachShadow({
      mode: 'open'
    })
  }

  applyAttrToData() {
    const data = this.getAttribute('b-model')
    this.data = Object.assign({}, this.data, JSON.parse(data || '{}'))
    this.setAttribute('b-model', ID.getNewId())
  }

  applyDataToAttr(data) {
    this.setAttribute('b-data', ID.getNewId())
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
    Diff.diffAsyn(this.tempShadow, this.shadow)
    this.rendered && this.rendered()
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
