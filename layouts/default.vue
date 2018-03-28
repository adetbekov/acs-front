<template lang="jade">
  div
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
	html
		color: #2c3e50
		background-color: $color-background-gray
</style>
