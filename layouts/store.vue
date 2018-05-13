<template lang="jade">
div
	el-container
		Navbar
			Logo(slot="left", logo="webcampus")
			p(slot="center") Center
	nuxt
</template>

<script>
import Navbar from "~/components/navbar/Navbar"
import Locale from "~/components/navbar/Locale"
import Logo from "~/components/navbar/Logo"

export default {
  components: {
    Navbar,
    Locale,
    Logo
  }
}
</script>

<style lang="sass">
	html
		color: $color-text-dark
		background-color: $color-background-gray
</style>
