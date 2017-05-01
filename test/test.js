import Bird from '../src/bird'
const { expect } = chai

window.DEBUG = false
var app = new Bird({
  template: `
  `,
  el: '#app'
})

mocha.setup('bdd')

describe('Bird', function() {
  describe('Bird function', function() {
    it('should have Bird function', function() {
      expect(typeof Bird).to.be.equal('function');
    });
  });
});

mocha.run()
