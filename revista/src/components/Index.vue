<template lang="pug">
  div
    h1 {{ text }}
    h3 {{numero}}
</template>


<script>
export default  {
  beforeCreate(){

  },
  methods:{
  },
  data() {
    return {
      text:3
    }
  },
  computed:{
    numero () {
      return this.text + 5
    }
  }
}
</script>

<style>

</style>

