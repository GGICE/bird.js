var App = new Bird({
  template: `
    <p>Text: </p>
    <hello-text>1</hello-text>
    <p>List: </p>
    <user-list>2</user-list>
    <p>Input: </p>
    <text-input></text-input>
  `,
  el: '#app'
})

App.component('hello-text', {
  template: `<div>{text}</div>`,
  styles: `
    div {
      color: red;
      font-size: 17px;
    }
  `,
  created() {
    var that = this
    setTimeout(function(){
      that.setData({
        text: '我发生变化了 haha!'
      })
    }, 2000)
  },
  attached() {

  },
  removed() {

  },
  rendered() {
    console.log('rendered!')
  },
  attributeChanged(name, oldVal, newVal) {

  },
  data: {
    text: 'Hello Bird.js',
    test: 'test'
  }
})

//App.component('user-list', {
//  template: `
//  <div>
//    {users.map(user => "
//      <p>我叫{user.name}, 年龄{user.age}</p>
//    ").join('')}
//  <div>
//  `,
//  data: {
//    users: [{
//      name: 'test',
//      age: 20
//    },
//    {
//      name: 'test3',
//      age: 21
//    }]
//  }
//})
//
//App.component('text-input', {
//  template: `<div>
//              <input on-keyup={inputChange}>
//              <div>{result}</div>
//            </div>`,
//
//  data: {
//    inputChange(e) {
//      this.setData({
//        result: e.target.value
//      })
//    }
//  }
//})