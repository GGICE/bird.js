import logs from 'common/logs'

class Diff {
  /**
   *  1.改  done
   *  2.增  done
   *  3.删  done
   * 
   * @param {dom} newDom 
   * @param {dom} oldDom 
  */
  static diff(newDom, oldDom) {
    if (newDom.innerHTML === oldDom.innerHTML) {
      return logs.log('diff Same!')
    }
    var oldNodes = this.getEls(oldDom.childNodes)
    var newNodes = this.getEls(newDom.childNodes)
    var oldLength = oldNodes.length
    var newLength = newNodes.length
    var length = Math.min(newLength, oldLength)
    var i
    //ADD TODO: support key
    if(newLength > oldLength) {
      for(i = oldLength; i < newLength; i++ ) {
        oldDom.appendChild(newNodes[i])
      }
    }
    //Remove TODO: support key
    if(newLength < oldLength) {
      for(i = oldLength; i > newLength ; i-- ) {
        oldDom.removeChild(oldNodes[i - 1])
      }
    }
    //Change
    for(i = 0; i < length; i++) {
      if (newNodes[i].outerHTML === oldNodes[i].outerHTML) {
        continue
      }

      if(newNodes[i].tagName !== oldNodes[i].tagName) {
        oldDom.replaceChild(newNodes[i], oldNodes[i])
        continue
      }

      if (this.getEls(newNodes[i].childNodes).length > 0) {
        this.diffAsyn(newNodes[i], oldNodes[i])
      } else {
        oldDom.replaceChild(newNodes[i], oldNodes[i])
      }
    }
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
    return [].filter.call(nodeList, function(node){
      return node.nodeType === 1
    })
  }
}

export default Diff