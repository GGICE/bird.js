import Bird from '../src/bird.ts'
var App = new Bird({
  template: `<user-list>user-list<user-list>`,
  el: '#app'
})

App.hello()
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