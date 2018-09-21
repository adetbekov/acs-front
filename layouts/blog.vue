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
@import "assets/styles/fonts/lato.sass"

.blog-layout
  font-family: "Lato", Helvetica, sans-serif 
  font-weight: 400
  color: #2c3e50
  background-color: #ffffff
  padding: 8px
</style>
