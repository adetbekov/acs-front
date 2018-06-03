<i18n>
{
	"en": {
    "hello": "Hi",
    "description": "I'm Yeldos, a Fullstack web-developer from Almaty. I'm looking for beauty in everything, in code, animation, interactive and generative design. Welcome to Adetbekov Creative Studio!"
	},
	"ru": {
    "hello": "Привет",
    "description": "Я - Елдос, <TextExpand short='Fullstack'>Full Stack веб-разработчик – это квалифицированный специалист, который способен принимать активное участие во всех этапах разработки веб-приложений, начиная от серверной логики и ее реализации с помощью различных технологий и фреймворков, и заканчивая клиентским кодом, работающим непосредственно в браузере.</TextExpand> веб-разработчик из Алматы. Ищу красоту во всём, в коде, анимации, интерактивности и генеративном дизайне. Добро пожаловать в Adetbekov Creative Studio!\n<nuxt-link to='webcampus'>Webcampus</nuxt-link>"
	},
	"kz": {
    "hello": "Sälem",
    "description": "Meniń esimim Eldos. Men - Almatınıń Fullstack web-damıtıwcısımın. Barlık jerde sulwlıktı izdeymin, kodta, änimecinde, interektevte jäne jeneretevti diyzaynda. Adetbekov Creative Studio jobasına koc keldińiz!"
	}
}
</i18n>

<template lang="jade">
  el-container
    el-main.main
      el-row
        el-col(:span="12", :offset="6", :xs="{span: 24, offset: 0}")
          h1 {{ $t("hello") }}
          p
            no-ssr(:placeholder="$t('description')")
              Dynamic(:template="$t('description')")
</template>

<script>
import Dynamic from "~/components/additional/Dynamic"

export default {
  layout: "dark",
  components: {
    Dynamic
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono')

.main
  min-height: calc( 100vh - 60px - 16px )
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
