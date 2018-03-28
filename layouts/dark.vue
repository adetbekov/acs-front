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
		color: #ffffff
		background-color: $color-background-dark
</style>
