<template lang="jade">
div
  el-container
    Navbar(color="light")
      Locale(slot="right")
  nuxt
</template>

<script>
import Navbar from "~/components/navbar/Navbar"
import Locale from "~/components/navbar/Locale"

export default {
  components: {
    Navbar,
    Locale
  }
}
</script>

<style lang="sass">
	html
		color: #ffffff
		background-color: $color-background-dark
</style>
