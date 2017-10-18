import logs from 'common/logs'
import filterHtml from 'common/filter-html'

const BTP = {
  /**
   * 模板引擎
   * TODO XSS 攻击过滤
   *
   * 临时占位符： 'b-@@##'
   */
  parse(options) {
    /* eslint no-unused-vars: "warn" */
    const {
      template,
      data,
      styles,
      stylesLink,
    } = options
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
      return filterHtml.escape(value)
    }

    function bString(stringData) {
      const newString = JSON.stringify(stringData)
      return newString.replace(/ /g, '&nbsp;')
    }

    html = BTP.parseEvent(html)
    html = BTP.parseNormal(html)
    html = html.replace(/b-@@##/g, '${')
    html = `\`${html}\``
    try {
      html = eval(html) // eslint-disable-line
      logs.log('html', html)
    } catch (e) {
      window.console.warn(e)
    }
    if (styles) {
      html = `<style>${styles}</style>${html}`
    }
    if (stylesLink) {
      stylesLink.forEach((link) => {
        html = `<link href="${link}" rel="stylesheet">${html}`
      })
    }
    return html
  },

  parseEvent(html) {
    return html.replace(
      /on-\w*={{\w*}}/g,
      $1 => ` ${$1.replace(/{{(\w*)}}/, ($2, $3) => `function[${$3}]`)}`,
    )
  },

  parseNormal(html) {
    return html
      .replace(/{{/g, '${')
      .replace(/}}/g, '}')
  },
}

export default BTP
