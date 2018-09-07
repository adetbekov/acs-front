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
      el-row.main-row
        el-col(:span="9", :offset="0", :xs="{span: 24, offset: 0}")
          h1 {{ $t("hello") }}
          p
            no-ssr(:placeholder="$t('description')")
              Dynamic(:template="$t('description')")
        el-col(:span="5", :offset="2", :xs="{span: 24, offset: 0}")
          el-card(class="box-card")
            h1 Hello
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae malesuada ex, eu tincidunt turpis.
        el-col(:span="5", :offset="1", :xs="{span: 24, offset: 0}")
          el-card(class="box-card")
            h1 Hello
            p Morbi vitae malesuada ex, eu tincidunt turpis. Donec cursus tristique erat quis pulvinar.
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
@import "assets/styles/fonts/trade-gothic-lt.sass"
@import "assets/styles/fonts/bebas-neue.sass"

.main
  min-height: calc( 100vh - 60px - 16px )
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center

.main-row
  display: flex
  flex-direction: row
  align-items: center

h1
  font-family: 'Trade Gothic LT Bold Condensed', 'Bebas Neue Bold', 'Lato Regular', Helvetica, sans-serif
  font-size: 15px
  vertical-align: baseline

// p
//   font-family: 'Bebas Neue Bold', 'Roboto Mono', monospace
//   font-weight: 300
//   font-size: 15px
//   vertical-align: baseline

h1
  font-size: 24px

p
  line-height: 1.7

.box-card
  h1, p
    color: $color-text-dark
</style>
