const { console } = window

export default {
  isDo() {
    return window.DEBUG
  },

  handleArg(args, doIt) {
    doIt(args.join(' '))
  },

  log(...args) {
    if (this.isDo()) {
      this.handleArg(args, console.log)
    }
  },

  warn(...args) {
    if (this.isDo()) {
      this.handleArg(args, console.warn)
    }
  },

  error(...args) {
    if (this.isDo()) {
      this.handleArg(args, console.error)
    }
  },
}
