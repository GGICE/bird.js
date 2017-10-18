const reEscape = /[&<>'"]/g
const { replace } = String.prototype
const reUnescape = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g
const oEscape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}
const oUnescape = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
}

function fnEscape(m) {
  return oEscape[m]
}

function fnUnescape(m) {
  return oUnescape[m]
}

export default {
  escape: function escape(s) {
    return replace.call(s, reEscape, fnEscape)
  },
  unescape: function unescape(s) {
    return replace.call(s, reUnescape, fnUnescape)
  },
}
