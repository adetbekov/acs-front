

<template lang="jade">
  el-container
    el-main
      nuxt-link(v-for="(locale, index) in $i18n.locales",
        v-if="locale.code !== $i18n.locale",
        :key="index",
        :exact="true",
        :to="switchLocalePath(locale.code)") {{ locale.name }}
      h1 {{ $t("welcome") }}
</template>

<script>
export default {
  layout: "dark"
}
</script>
