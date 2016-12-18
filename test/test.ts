import Bird from '../src/Bird'
var App = new Bird({
  template: `
    <hello-text></hello-text>
    <user-list>user-list<user-list>
  `,
  el: '#app'
})

App.component('hello-text', {
  template: `<b-model text={text}>HELLO</b-model>`,
  data: {
    text: 'Hello Bird.js'
  }
})

App.component('user-list', {
  template: `<b-for>LIST</b-for>`,
  data: {
    list: [{
      name: 'test',
      age: 20
    },
    {
      name: 'test1',
      age: 21
    }]
  }
})