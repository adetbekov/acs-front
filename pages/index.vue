<i18n>
{
	"en": {
    "hello": "Hey",
    "description": "I'm Yeldos, a Fullstack web-developer from Almaty. I'm looking for beauty in everything, in code, animation, interactive and generative design. Well, welcome to Adetbekov Creative Studio!"
	},
	"ru": {
    "hello": "Салют",
    "description": "Я - Елдос, Fullstack веб-разработчик из Алматы. Ищу красоту во всём, в коде, анимации, интерактивности и генеративном дизайне. Что ж, добро пожаловать в Adetbekov Creative Studio!"
	},
	"kz": {
    "hello": "Iyä",
    "description": "Meniñ esimim Eldos. Men - Almatınıñ Fullstack web-damıtıwcısımın. Barlık jerde sulwlıktı izdeymin, kodta, änimecinde, interektevte jäne jeneretevti diyzaynda. Jaksı, Adetbekov Creative Studio jobasına koc keldińiz!"
	}
}
</i18n>

<template lang="jade">
  el-container
    el-main.main
      el-row
        el-col(:span="12", :offset="6", :xs="{span: 24, offset: 0}")
          h1 {{ $t("hello") }}
          p {{ $t("description") }}
      el-row
        el-col(:span="12", :offset="6")
          h1 {{ $t("hello") }}
          p {{ $t("description") }}   
</template>

<script>
export default {
  layout: "dark"
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono')

.main
  height: calc( 100vh - 60px - 16px )
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center

h1, p
  font-family: 'Roboto Mono', monospace
  font-weight: 300
  font-size: 15px
  vertical-align: baseline

h1
  font-size: 24px

p
  line-height: 1.7
</style>
