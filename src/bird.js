var Bird

Bird = {
  create(options) {
    var { template, el , data } = options

    this.wrap =  document.querySelect(el)
    this.template = template
    this.el = el
    this.data = data

    this.parse()
    this.apply()
  },
  parse() {

  },
  apply() {
    
  }
}

export default Bird
