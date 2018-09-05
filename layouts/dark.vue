<template lang="jade">
.dark-layout(v-cloak)
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
.dark-layout
  background-color: $color-background-dark

  h1, h2, h3, h4, h5, h6, p, span, li, a
    color: $color-text-white
  
  padding: 8px


[v-cloak]
  display: none !important
</style>
