<template lang="jade">
div
	el-container
		Navbar(color="dark")
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
		color: $color-text-dark
		background-color: $color-background-gray
</style>
