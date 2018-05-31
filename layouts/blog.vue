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
.blog-layout
  color: #2c3e50
  background-color: #ffffff
  padding: 8px

#header
  width: 100%
  z-index: 10
  display: flex
  align-items: center
  justify-content: space-between
</style>
