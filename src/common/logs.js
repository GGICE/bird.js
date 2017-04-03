const { console } = window

export default {
  isDo() {
    return window.DEBUG
  },
  log() {
    if(this.isDo()) {
      console.log(arguments)
    }
  },
  warn() {
    if(this.isDo()) {
      console.warn(arguments)
    }
  },
  error() {
    if(this.isDo()) {
      console.error(arguments)
    }
  }
}
