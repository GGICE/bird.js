import Bird from '../src/bird'

window.DEBUG = true
var app = new Bird({
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

app.component('hello-text', {
  template: `<div class='hello'>{text}</div>`,
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
      app.trigger('hello', {
        text: 'hello!'
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

app.component('user-list', {
  template: `
  <div>
    {users.map(user => "
      <t-user b-model={JSON.stringify(user)}></t-user>
    ")}
  <div>
  `,
  data: {
    users: [{
      name: 'test',
      age: 20
    },
    {
      name: 'test3',
      age: 21
    }]
  },
  created() {
    app.on('hello', function(arg){
      console.log(arg)
    })
  }
})

app.component('t-user', {
  template: `
    <p>我叫{name}, 年龄{age}</p>
  `,
  created() {
    console.log(this.data)
  }
})

// app.component('text-input', {
//   template: `<div>
//               <input on-keyup={inputChange}>
//               <div>{result || ''}</div>
//             </div>`,

//   data: {
//     inputChange(e) {
//       this.setData({
//         result: e.target.value
//       })
//     }
//   }
// })
