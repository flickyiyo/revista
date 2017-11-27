<template lang="pug" >
  div(id="designer")
    h1(@click="ondrag") Hi {{asd}}
    button(@click="createBox") Crear caja
    button(@click="createImageBox") Crear Image
    div(v-for="caja in cajas")
      box(
        :id="caja.id",
        :dims="caja.dims",
        :position="caja.position",
        :step="caja.step",
        @changeFocus="setFocus",
        :initText="caja.text",
      )
    div(v-for="caja in cajasImage")
      box(
        :id="caja.id",
        :dims="caja.dims",
        :position="caja.position",
        :x="caja.x",
        :y="caja.y",
        :width="caja.width",
        :height="caja.height",
        :step="caja.step",
        @dimChange="dimChange",
        isImage="true",
        @changeFocus="setFocus",
      )
</template>

<script>
import TextBox from './TextBox'
import Console from './Console'
import PictureInput from 'vue-picture-input'
import Box from './Box'
export default {
  components:{
    TextBox,
    Box,
    Console,
    PictureInput
  },
  data:() => ({
    asd:'asdasd',
    offset:{},
    text:'',
    counter:0,
    cajas:[],
    cajasImage:[],
    focusedElement:undefined,
  }),

  clickBox() {
/*{
  cajasText: [
    {
      id: 4,
      step: 0,
      text: 'texto caja 1 mock',
      position: {
        x:600,
        y:650
      },
      dims : {
        width: 250,
        height: 400,
      },
      style: {...}
    }
    {...},
    {...}
  ]
  cajasImage: [
    {
      id: 4,
      step: 0,
      img: 'https://aisjdlajsdaijsd.com/img.png',
      position: {
        x:600,
        y:650
      },
      dims : {
        width: 250,
        height: 400,
      },
      style: {...}
    },
    {...},
    {...}
  ]
}//*/
  },
  beforeMount() {
    this.cajas = [
      {
        id: 4,
        step: 0,
        text: 'texto caja 1 mock',
        position: {
          x:600,
          y:650
        },
        dims : {
          width: 250,
          height: 400,
        }
      }
    ]
    this.counter = this.cajasImage.length + this.cajas.length
  },
  beforeCreate() {

  },
  methods:{
    setFocus(id){
      console.log(id, 'focusing this id')
      this.focusedElement = id
    },
    dimChange(data) {
      console.log('resizing')
    },
    createImageBox(){
      let box = {
        id: this.counter,
        step: this.cajasImage.length,
        position: {
          x: 400,
          y: 400,
        },
        dims: {
          width: 100,
          height: 100,
        },
        img: '',
      }
      this.cajasImage.push(box)
      this.counter ++
    },
    createBox(){
      let  box = {
        id: this.counter,
        step: this.cajas.length,
        position: {
          x: 400,
          y: 400,
        },
        dims: {
          width: 100,
          height: 100,
        },
        text: ''
      }
      this.cajas.push(box)
      this.counter ++
    },
    changeBox() {
      document.getElementById(ev.target.id)
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
