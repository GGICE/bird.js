import logs from 'common/logs'

class Btp {
  /**
   * 模板引擎
   * TODO 需要优化匹配
   * TODO XSS 攻击过滤
   *
   * 临时占位符： 'b-@@##'
   */

  static parse(options) {
    /* eslint no-unused-vars: "warn" */
    const { template, data, styles } = options
    if (!template) {
      logs.warn('No template!')
      return ''
    }
    let html = template
      .replace(/\r|\f|\n/g, '')
      .replace(/( )+/g, ' ')

    function bMap(name, oneName, tp) {
      const mapData = data[name]

      if (!mapData.length || mapData.length < 1) {
        return ''
      }
      return mapData.map(one =>
        eval(`var ${oneName} = one;\`${tp}\``)).join('') // eslint-disable-line
    }

    function bGet(name) {
      const value = data[name]
      if (value === undefined) {
        return ''
      }
      return value
    }

    function bString(stringData) {
      const newString = JSON.stringify(stringData)
      return newString.replace(/ /g, '&nbsp;')
    }

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

  static parseEvent(html) {
    return html.replace(
      /on-\w*={{\w*}}/g,
      $1 => ` ${$1.replace(/{{(\w*)}}/, ($2, $3) => `function[${$3}]`)}`,
    )
  }

  static parseNormal(html) {
    return html
      .replace(/{{/g, '${')
      .replace(/}}/g, '}')
  }
}

export default Btp
