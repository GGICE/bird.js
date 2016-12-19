export default function(){
  var TextProto: any = Object.create(HTMLElement.prototype)
  TextProto.createdCallback = function() {
    var shadow = this.createShadowRoot()
    shadow.innerHTML = this.getAttribute('text')

    setTimeout(()=>{
      this.setAttribute('text', 'haha')
    }, 2000)
  }
  TextProto.attachedCallback = function() {
    console.log('attachedCallback')
  }
  TextProto.detachedCallback = function() {
    console.log('detachedCallback')
  }
  TextProto.attributeChangedCallback = function(name, oldVal , newVal) {
    console.log(name, oldVal, newVal)
  }
  var Text = (<any>document).registerElement('b-text', {
    prototype : TextProto
  })
}