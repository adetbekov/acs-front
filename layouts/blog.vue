<template lang="jade">
.blog-layout
  el-container
    Navbar
  nuxt
</template>

<script>
import Navbar from "~/components/navbar/Navbar"

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400')

.blog-layout
  font-family: 'Roboto', sans-serif
  color: #2c3e50
  background-color: #ffffff
  padding: 8px
</style>
