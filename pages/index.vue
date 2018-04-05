<i18n>
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
			h1 {{ $t("hello") }}
</template>

<script>
export default {
  layout: "dark"
}
</script>
