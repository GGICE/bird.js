class Btp {
  /**
   * 模板引擎
   * TODO 需要优化匹配
   * TODO XSS 攻击过滤
   *
   * 需要支持以下几种匹配规则:
   *
   * _parseNormal do
   * {someVar} => ${data.someVar}
   * {someVar.someVar} => ${data.someVar.someVar}
   *
   * _parseMap() do
   * {users.map(user => "
   *   <p>我叫{user.name}, 年龄{user.age}</p>
   * ")}
   * =>
   * ${data.users.map(user => "
   *   <p>我叫{user.name}, 年龄{user.age}</p>
   * ").join('')}
   *
   * 临时占位符： 'b-@@##'
   */

  constructor() {
    //Do nothing
  }

  _parse(options) {
    /*eslint no-unused-vars: "warn"*/
    const { template, data, _styles } = options
    var html = template
               .replace(/\r|\f|\n/g, '')
               .replace(/( )+/g, ' ')

    html = this._parseMap(html)
    html = this._parseEvent(html)
    html = this._parseNormal(html)
    html = html.replace(/b-@@##/g, '${')
    html = '`' + html + '`'
    try {
      html = eval(html)
    } catch(e) {
      window.console.warn(e)
    }
    if(_styles) {
      html = '<style>' + _styles + '</style>' + html
    }
    return html
  }

  _parseMap(html) {
    console.log(html)
    return html.replace(/\w*.map.*\)/g, ($1) => {
      $1 = $1.replace(/{/g, 'b-@@##')
      $1 = $1.replace(/"/g, '`')
      return $1 + '.join("")'
    })
  }

  _parseEvent(html) {
    return html.replace(/on-\w*={\w*}/g, ($1) => {
      return ' ' + $1.replace(/{(\w*)}/, ($2, $3) => {
        return 'function[' + $3 + ']'
      })
    })
  }

  _parseNormal(html) {
    return html.replace('{', '${data.')
  }

}

export default Btp
