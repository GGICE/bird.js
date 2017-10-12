export default {
  getNewId() {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let text = ''
    for (let i = 0; i < 10; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  },
}
