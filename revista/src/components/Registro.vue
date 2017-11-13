<template lang="pug" >
  div
    h1 Registro
    form
      input(type="text" v-model="username" placeholder="username")
      input(type="text" v-model="password" placeholder="password")
      input(type="email" v-model="email" placeholder="email")
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: '',
    email: '',
  })
}
</script>

<style>

</style>
