<template lang="jade">
	el-header(id="header")
		Logo(logo="acs")
</template>

<script>
import Logo from "./Logo"

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped>
	#header
		width: 100%
		z-index: 10
		display: flex
		align-items: center
		justify-content: space-between
</style>
