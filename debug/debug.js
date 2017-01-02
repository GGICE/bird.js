var App = new Bird({
  template: `
    <hello-text>1</hello-text>
    <br/>
    <user-list>2</user-list>
    <br/>
    <b-input></b-input>
  `,
  el: '#app'
})

App.component('hello-text', {
  template: `<div data-test={test}>Text:{text}</div>`,
  data: {
    text: 'Hello Bird.js',
    test: 'test'
  }
})

App.component('user-list', {
  template: `<div>This will a List</div>`,
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

App.component('b-input', {
  template: `<input>`,
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