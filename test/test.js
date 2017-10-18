import Bird from '../src/bird'
const { expect } = chai

window.DEBUG = false
var app = new Bird({
  template: `
    <xss-text></xss-text>
  `,
  el: '#app'
})

Bird.component('xss-text', {
  template: `<div class='xss'>xss:{{bGet('text')}}</div>`,
  data: {
    text: '<img src="http://ice.gs"><script>console.log("xss")</script>'
  },
})

mocha.setup('bdd')

describe('Bird', function() {
  describe('Bird function', function() {
    it('should have Bird function', function() {
      expect(typeof Bird).to.be.equal('function')
    })
  })

  describe('bGet xss filter', function () {
    it('should no <script> <img>', function () {
      const xssEl = document.querySelector('xss-text')
      const xssElHtml = xssEl.shadowRoot.innerHTML
      expect(xssElHtml.indexOf('<script>')).to.be.equal(-1)
      expect(xssElHtml.indexOf('<img>')).to.be.equal(-1)
    })
  })
})


mocha.run()
