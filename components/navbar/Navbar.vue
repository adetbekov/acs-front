<template lang="jade">
  el-header(id="header")
    .left
      slot(name="left")
        Logo(logo="acs")
    .center
      slot(name="center")
    .right
      slot(name="right")
      fa(icon="bars")
</template>

<script>
import Logo from "~/components/navbar/Logo"

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass">
#header
  width: 100%
  z-index: 10
  display: flex
  align-items: center
  justify-content: space-between
  font-size: 16px

  *
    display: flex
    align-items: center
    transition: all 0.2s ease-in-out

  .right > *
    padding: 0 0 0 15px
  
  .left > *
    padding: 0 15px 0 0
  
  &[color="dark"]
     *, a
      color: $color-text-dark
  
  &[color="light"]
     *, a
      color: $color-background-gray

  a:hover
    color: #3498db
</style>
