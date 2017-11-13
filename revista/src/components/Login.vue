<template lang="pug" >
  div
    h1 Login
    form
      input(type="text" placeholder="username" v-model="username")
      input(type="password" placeholder="password" v-model="password")
    h3 {{username}}
</template>

<script>
export default {
  data: () => ({
    username:'',
    password: ''
  })
}
</script>

<style>

</style>
