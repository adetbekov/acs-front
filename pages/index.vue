<i18n lang="i18n">
{
  "en": {
    "hello": "hello world!"
  },
  "ru": {
    "hello": "Привет мир!"
	},
	"kz": {
    "hello": "Sälem älem!"
  }
}
</i18n>

<template lang="jade">
	el-container
		el-main
			nuxt-link(v-for="(locale, index) in $i18n.locales",
				v-if="locale.code !== $i18n.locale",
				:key="index",
				:exact="true",
				:to="switchLocalePath(locale.code)") {{ locale.name }}
			h1 heey
</template>

<script>
export default {
  layout: "dark"
}
</script>
