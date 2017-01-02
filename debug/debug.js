var App = new Bird({
  template: `
    <p>Text: </p>
    <hello-text>1</hello-text>
    <p>List: </p>
    <user-list>2</user-list>
    <p>Input: </p>
    <b-input></b-input>
  `,
  el: '#app'
})

App.component('hello-text', {
  template: `<div data-test={test}>{text}</div>`,
  created() {
    var that = this
    setTimeout(function(){
      console.log('that', that)
      that.setData({
        text: '我发生变化了 haha!'
      })
    }, 2000)
  },
  attached() {

  },
  removed() {

  },
  attributeChanged(name, oldVal, newVal) {

  },
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
  template: `<div>
              <input on-keyup={inputChange}>
              <div>{result}</div>
            </div>`,

  data: {
    inputChange(e) {
      console.log(e)
      this.setData({
        result: e.target.value
      })
    }
  }
})