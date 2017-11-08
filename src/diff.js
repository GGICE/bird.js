import logs from 'common/logs'

class Diff {
  /**
   * @param {dom} newDom
   * @param {dom} oldDom
  */
  static diff(newDom, oldDom) {
    /* eslint no-continue: "off" */
    if (newDom.innerHTML === oldDom.innerHTML) {
      return logs.log('diff Same!')
    }
    const oldNodes = this.getEls(oldDom.childNodes)
    const newNodes = this.getEls(newDom.childNodes)
    const oldLength = oldNodes.length
    const newLength = newNodes.length
    const length = Math.min(newLength, oldLength)
    let i

    // ADD TODO: support key
    if (newLength > oldLength) {
      for (i = oldLength; i < newLength; i += 1) {
        oldDom.appendChild(newNodes[i])
      }
    }
    // Remove TODO: support key
    if (newLength < oldLength) {
      for (i = oldLength; i > newLength; i -= 1) {
        oldDom.removeChild(oldNodes[i - 1])
      }
    }
    // Change
    for (i = 0; i < length; i += 1) {
      if (newNodes[i].outerHTML === oldNodes[i].outerHTML) {
        continue
      }

      if (newNodes[i].tagName !== oldNodes[i].tagName) {
        oldDom.replaceChild(newNodes[i], oldNodes[i])
        continue
      }

      if (this.getEls(newNodes[i].childNodes).length > 0) {
        this.diffAsyn(newNodes[i], oldNodes[i])
      } else {
        oldDom.replaceChild(newNodes[i], oldNodes[i])
      }
    }

    return true
  }

  /**
   * 非阻塞diff
   * @param {dom} newDom
   * @param {dom} oldDom
   */
  static diffAsyn(newDom, oldDom) {
    return new Promise((resolve) => {
      this.diff(newDom, oldDom)
      resolve()
    })
  }

  static getEls(nodeList) {
    return [].filter.call(nodeList, node => node.nodeType === 1)
  }
}

export default Diff
