<template lang="pug" >
  div(
    class="box"
    :id="id" 
    draggable="true" 
    @drag="dragging" 
    @dragend="onDragEnd" 
    @dragstart="ondrag" 
    @click="clk"
    @dblclick="dbclk"
    @resize="resize"
    @drop="ondrop")
    picture-input(
      v-if="isImage"
      ref="pictureInput"
      v-bind:width="widthNumber"
      v-bind:height="heightNumber"
      size="25"
      accept="image/jpeg,image/png" 
      buttonClass="btn"
    )
    p(v-if="!editing") {{text}}
    textarea(v-else @focusout="focusOut" class="txtBox" @load="load"  id="textArea" v-model="text") {{text}}

</template>

<script>

/*
elementResizeEvent = require('../index.js');

element = document.getElementById("resize");
window.p = p = document.getElementById("width");
console.log(p);
console.log(elementResizeEvent);
console.log(elementResizeEvent(element, function() {
  console.log("resized!");
  console.log(element.offsetWidth);
  console.log(p);
  console.log(element.offsetWidth + "px wide");
  p.innerHTML = element.offsetWidth + "px wide";
}));

 */
import TextBox from './TextBox'
import PictureInput from 'vue-picture-input'
import ResizeEvent from 'element-resize-event'
export default {
  name:'box',
  computed:{
    width() {
      console.log(this.widthNumber)
      //document.getElementById(this.id).style.width=this.widthNumber+'px'
      window.resizeBy(100,100)
      return parseInt(this.widthNumber)
    },
    height() {
      return parseInt(this.heightNumber)
    }
  },
  components: {
    TextBox, PictureInput
  },
  props: {
    id: {
      required: true,
    },
    editableText:{
      type: Boolean,
      default:true
    },
    isImage: {
      default: false
    },
    initText: {
      type: String,
      default: '',
    },
    position: {
      default: {
        x:400,
        y: 400,
      },
    },
    dims: {
      default: {
        height: 100,
        width: 100,
      }
    }
  },
  mounted(){
    let b = document.getElementById(this.id)
    ResizeEvent(b, function() {
      console.log('evento resize', b.offsetWidth)
      this.widthNumber= b.offsetWidth
      this.heightNumber= b.offsetHeight
    })
    b.style.top = this.position.y + 'px'
    b.style.left = this.position.x + 'px'
    b.style.width = this.dims.width + 'px'
    b.style.height = this.dims.height + 'px'

  },
  data: () => ({
    offset:{},
    text: undefined,
    editing: false,
    widthNumber: 400,
    heightNumber: 400,
    margin:'50'
  }),
  beforeMount(){
    this.text = this.initText
  },
  methods: {
    setFocus(){
      this.$emit('changeFocus', this.id)
    },
    changeBox() {
      document.getElementById(ev.target.id)
    },
    resize(ev) {
      console.log(ev.target, 'resize')
    },
    dragging(ev) {
//      document.getElementById(ev.target.id).style.position="absolute"
      //document.getElementById(ev.target.id).style.top=(-ev.layerX+ev.y)+'px'
      //document.getElementById(ev.target.id).style.left=(-ev.layerX+ev.x)+'px'
      
      document.getElementById(ev.target.id).style.top=(-this.offset.y+ev.y)+'px'
      document.getElementById(ev.target.id).style.left=(-this.offset.x+ev.x)+'px'
    },
    ondrop(ev){
      
    },
    ondrag(ev) {
      this.offset.x = ev.offsetX
      this.offset.y = ev.offsetY
    },
    onDragEnd(ev){
      document.getElementById(ev.target.id).style.top=(-this.offset.y+ev.y) + 'px'
      document.getElementById(ev.target.id).style.left=(-this.offset.x+ev.x) + 'px'
    },
    dragOver(ev) {
      
      //console.log(ev.target)
    },
    clk(ev) {
      this.setFocus()
    },
    dbclk(ev) {
      let element = document.getElementById(ev.target.id)
      const value = element.innerText 
      this.editing= true
      //document.getElementById('textArea').focus()
      //document.getElementById('idtmp').focus()
    },
    focusOut() {
      this.editing=false
    },
    load(ev){
      
    },
  }
}
</script>

<style scoped >
.box {
  border: 1px solid;
  height: 100px;
  position: absolute;
  resize: both;
  overflow: auto;
}

.txtBox {
  width: inherit;
  height: inherit;;
}
</style>
