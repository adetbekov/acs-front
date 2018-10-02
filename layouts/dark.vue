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
@import "assets/styles/fonts/lato.sass"

.dark-layout
  position: relative
  overflow: hidden
  background-color: $color-background-dark
  font-family: "Lato", Helvetica, sans-serif 
  font-weight: 400
  padding: 8px
  
  p
    letter-spacing: 1px
    line-height: 2

  h1, h2, h3, h4, h5, h6, p, span, li, a
    color: $color-text-white


[v-cloak]
  display: none !important
</style>
