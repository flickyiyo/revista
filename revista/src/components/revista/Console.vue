<template lang="pug" >
  div(id="console")
    h4 Tabla de parametros
    input(type="number" name="bRadius" :value="borderRadius")
    input(type="number" name="bWidth" :value="borderWidth")
</template>

<script>
export default {
  props: {
    borderStyle: {
      type:String,
    },
    borderRadius:{
      type: Number,
    },
    borderWidth: {
      type: Number,
    },
    fontFamily: {
      type: String,
    }
  },
  methods:{
    onChangeValues(ev) {
      console.log(ev.target)
    },
  },
  data: () => ({
    
  })
}
</script>

<style>

</style>
