import Bird from '../src/Bird'
var App = new Bird({
  template: `
    <b-text text={"HelloWord"}></b-text>
    <user-list>user-list<user-list>
  `,
  el: '#app'
})

App.component('hello-text', {
  template: `<b-text text={text}>HELLO</b-text>`,
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