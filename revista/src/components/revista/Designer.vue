<template lang="pug" >
  div(id="designer")
    h1(@click="ondrag") Hi {{asd}}
    button(@click="createBox") Crear caja
    box(id='box1')
    div(v-for="caja in cajas")
      box(:id="caja")
</template>

<script>
import TextBox from './TextBox'
import Console from './Console'
import Box from './Box'
export default {
  components:{
    TextBox,
    Box,
    Console
  },
  data:() => ({
    asd:'asdasd',
    offset:{},
    text:'',
    counter:0,
    cajas:[],

  }),

  clickBox() {
    
  },
  beforeCreate() {

  },
  methods:{
    createBox(){
      this.cajas.push(this.counter.toString())
      this.counter ++;
      /*let designer = document.getElementById('designer')
      let box = document.createElement('box')
      box.id=this.counter
      box.className='box'
      box.draggable=true
      this.counter++;
      document.getElementById('designer').appendChild(box)
      //*/
    },
    changeBox() {
      document.getElementById(ev.target.id);
    },
    dragging(ev) {
//      document.getElementById(ev.target.id).style.position="absolute"
      //document.getElementById(ev.target.id).style.top=(-ev.layerX+ev.y)+'px'
      //document.getElementById(ev.target.id).style.left=(-ev.layerX+ev.x)+'px'
      
      document.getElementById(ev.target.id).style.top=(-this.offset.y+ev.y)+'px';
      document.getElementById(ev.target.id).style.left=(-this.offset.x+ev.x)+'px';
    },
    ondrop(ev){
      
    },
    ondrag(ev) {
      this.offset.x = ev.offsetX;
      this.offset.y = ev.offsetY;
      
    },
    onDragEnd(ev){
      document.getElementById(ev.target.id).style.top=(-this.offset.y+ev.y)+'px';
      document.getElementById(ev.target.id).style.left=(-this.offset.x+ev.x)+'px';
    },
    dragOver(ev) {
      
      //console.log(ev.target)
      this.asd += .1;
    },
    clk(ev) {
      console.log(ev.offsetX, ev.offsetY);
    },
    dbclk(ev) {
    }
  },
}
</script>

<style>
.box {
  border: 1px solid;
  width: 100px;
  height: 100px;
  position: absolute;
  resize: both;
  overflow: auto;
}
.bigbox {
  border: 1px solid;
  width: 200px;
  height: 200px;
  top: 100px;
  left: 100px;
  position: absolute;
}
</style>
