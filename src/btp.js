class Btp {
  /**
   * 模板引擎
   * TODO 需要优化匹配
   * TODO XSS 攻击过滤
   *
   * 需要支持以下几种匹配规则:
   *
   * parseNormal do
   * {someVar} => ${data.someVar}
   * {someVar.someVar} => ${data.someVar.someVar}
   *
   * parseMap() do
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

  static parse(options) {
    /* eslint no-unused-vars: "warn" */
    const { template, data, styles } = options
    let html = template
      .replace(/\r|\f|\n/g, '')
      .replace(/( )+/g, ' ')

    // html = this.parseMap(html)
    html = Btp.parseEvent(html)
    html = Btp.parseNormal(html)
    html = html.replace(/b-@@##/g, '${')
    html = `\`${html}\``
    try {
      html = eval(html) // eslint-disable-line
    } catch (e) {
      window.console.warn(e)
    }
    if (styles) {
      html = `<style>${styles}</style>${html}`
    }
    return html
  }

  // parseMap(html) {
  //  return html.replace(/\w*.map.*\)/g, ($1) => {
  //    $1 = $1.replace(/{/g, 'b-@@##')
  //    $1 = $1.replace(/"/g, '`')
  //    return $1 + '.join("")'
  //  })
  // }

  static parseEvent(html) {
    return html.replace(/on-\w*={{\w*}}/g, $1 => ` ${$1.replace(/{{(\w*)}}/, ($2, $3) => `function[${$3}]`)}`)
  }

  static parseNormal(html) {
    return html.replace(/{{/g, '${data.')
      .replace(/}}/g, '}')
  }
}

export default Btp
