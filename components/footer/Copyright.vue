<i18n>
{
	"en": {
    "copyright": "Copyright",
    "with-love": "with ❤️"
	},
	"ru": {
    "copyright": "Авторские права",
    "with-love": "с ❤️"
	},
	"kz": {
    "copyright": "Awtırlık kukık",
    "with-love": "❤️pen"
	}
}
</i18n>

<template lang="jade">
  #copyright
    span {{ $t("copyright") }} © 2017–{{ getThisYear }}
    br
    span Adetbekov Creative Studio {{ $t("with-love") }}
</template>

<script>
import moment from "moment"

export default {
  computed: {
    getThisYear() {
      return moment().format("YYYY")
    }
  }
}
</script>


<style lang="sass" scoped>
  #copyright > *
    font-size: 12px
    color: $color-text-white
    opacity: 0.4
</style>
