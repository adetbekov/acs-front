<i18n>
{
  "en": {
    "dashboard": "Dashboard",
    "store": "Course store",
    "purchased": "My courses"
  },
  "ru": {
    "dashboard": "Основная",
    "store": "Магазин курсов",
    "purchased": "Мои курсы"
  },
  "kz": {
    "dashboard": "Bastı bet",
    "store": "Düken",
    "purchased": "Satıp alıngan"
  }
}
</i18n>

<template lang="jade">
.store-layout
  el-container
    Navbar
      Logo(slot="left", logo="webcampus")
      .menu(slot="center")
        nuxt-link(to="dashboard") 
          fa(name="dashboard", scale="1.2")
          small {{ $t("dashboard") }}
        nuxt-link(to="")
          fa(name="store", scale="1.2")
          small {{ $t("store") }}
        nuxt-link(to="purchased")
          fa(name="purchased", scale="1.2")
          small {{ $t("purchased") }}
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
.store-layout
  color: $color-text-dark
  background-color: $color-background-gray
  height: 100%
  padding: 8px

  .menu 
    margin: 0
    padding: 0
    display: flex
    align-items: center

    a
      padding: 0 12px
      display: flex
      flex-direction: column
      align-items: center

      &:hover *
        color: $color-text-primary-hover!important

    small
      font-size: 68%
      
  .nuxt-link-active *
    color: $color-text-primary-hover!important

</style>
