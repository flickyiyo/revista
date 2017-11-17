<template lang="pug" >
  div
    div(class="box"
      :id="id" 
      draggable="true" 
      @drag="dragging" 
      @dragend="onDragEnd" 
      @dragstart="ondrag" 
      @click="clk"
      @dblclick="dbclk"
      @drop="ondrop") 
        p(v-if="!editing") {{text}}
        textarea(v-else @focusout="focusOut" class="txtBox" @load="load"  id="textArea" v-model="text") {{text}}
</template>

<script>
import TextBox from './TextBox'
export default {
  components: {
    TextBox
  },
  props: {
    id: {
      required: true,
      type: String
    },
  },
  data: () => ({
    offset:{},
    text: undefined,
    editing: false
  }),
  beforeMount(){
  },
  methods: {
    changeBox() {
      document.getElementById(ev.target.id)
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
      document.getElementById(ev.target.id).style.top=(-this.offset.y+ev.y)+'px'
      document.getElementById(ev.target.id).style.left=(-this.offset.x+ev.x)+'px'
    },
    dragOver(ev) {
      
      //console.log(ev.target)
    },
    clk(ev) {
      console.log(document.activeElement)
      console.log(ev.offsetX, ev.offsetY)
      
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
  width: 100px;
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
