import Bird from '../src/bird'

window.DEBUG = true
const app = new Bird({
  template: `
    <p>Text: </p>
    <hello-text>1</hello-text>
    <p>List: </p>
    <user-list>2</user-list>
    <p>Input: </p>
    <text-input></text-input>
  `,
  el: '#app',
})

Bird.component('hello-text', {
  template: `
    <link href="debug/styles.css" rel="stylesheet" title="Default Style">
    <div class='hello'>{{data.text}}</div>`,
  styles: `
    div {
      color: red;
      font-size: 17px;
    }
  `,
  created() {
    setTimeout(() => {
      this.setData({
        text: '我发生变化了 haha!',
      })
      app.trigger('hello', {
        text: 'hello!',
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
  attributeChanged() {

  },
  data: {
    text: 'Hello Bird.js',
    test: 'test',
  },
})

Bird.component('user-list', {
  template: `
    <div>
      {{bMap('users', '<t-user b-model={{bString(user)}}></t-user>')}}
    <div>
  `,
  data: {
    users: [{
      name: 'test0',
      age: 20,
    },
    {
      name: 'test1',
      age: 21,
    }],
  },
  created() {
    app.on('hello', (arg) => {
      console.log(arg)
    })

    setTimeout(() => {
      this.setData({
        users: [
          {
            name: 'n0',
            age: 1,
          },
        ],
      })
    }, 2000)

    setTimeout(() => {
      this.setData({
        users: [
          {
            name: 'n 1',
            age: 2,
          },
          {
            name: 'n2',
            age: 2,
          },
          {
            name: 'n3',
            age: 2,
          },
        ],
      })
    }, 3000)
  },
})

Bird.component('t-user', {
  template: `
    <p>我叫{{bGet('name')}}, 年龄{{bGet('age')}}</p>
  `,
  created() {
  },
})

Bird.component('text-input', {
  template: `<div>
              <input on-keyup={{inputChange}}>
              <div>{{data.result || ''}}</div>
            </div>`,
  data: {
    inputChange(e) {
      this.setData({
        result: e.target.value,
      })
    },
  },
})
