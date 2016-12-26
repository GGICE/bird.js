var App = new Bird({
  template: `
    <hello-text text={"HelloWord"}>1</hello-text>
    <user-list>2</user-list>
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
      name: 'test3',
      age: 21
    }]
  }
})