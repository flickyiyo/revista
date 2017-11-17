<template lang="pug" >
  div
    textarea(@focusout="") {{text}}
</template>

<script>
export default {
  props: {
    initText: {
      required: true,
      type: String
    }
  },
  data: () => ({
    text: this.initText
  }),
  methods:{
    focusOut() {
      this.$emit('changeFocus')
    }
  },
  created() {
    this
  }
}
</script>

<style>

</style>
