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

	#header
		width: 100%
		z-index: 10
		display: flex
		align-items: center
		justify-content: space-between
</style>
