<i18n>
{
	"en": {
    "hello": "Hello",
    "description": "I'm Yeldos, a Fullstack web-developer from Almaty. I'm looking for beauty in everything, in code, animation, interactive and generative design. Welcome to Adetbekov Creative Studio!",
    "rightnow": "Right Now",
    "blog": "Blog"
	},
	"ru": {
    "hello": "Привет",
    "description": "Я - Елдос, <TextExpand short='Fullstack'>Full Stack веб-разработчик – это квалифицированный специалист, который способен принимать активное участие во всех этапах разработки веб-приложений, начиная от серверной логики и ее реализации с помощью различных технологий и фреймворков, и заканчивая клиентским кодом, работающим непосредственно в браузере.</TextExpand> веб-разработчик из Алматы. Ищу красоту во всём, в коде, анимации, интерактивности и генеративном дизайне. Добро пожаловать в Adetbekov Creative Studio!\n<nuxt-link to='webcampus'>Webcampus</nuxt-link>",
    "rightnow": "Прямо сейчас",
    "blog": "Блог"
	},
	"kz": {
    "hello": "Sälem",
    "description": "Meniń esimim Eldos. Men - Almatınıń Fullstack web-damıtıwcısımın. Barlık jerde sulwlıktı izdeymin, kodta, änimecinde, interektevte jäne jeneretevti diyzaynda. Adetbekov Creative Studio jobasına koc keldińiz!",
    "rightnow": "Däl käzir",
    "blog": "Blog"
	}
}
</i18n>

<template lang="jade">
  el-container
    el-main.main
      el-row.main-row
        el-col(:span="9", :offset="0", :xs="{span: 24, offset: 0}")
          h1 {{ $t("hello") | uppercase }}
          img(src="~/assets/images/waves.svg", width="100")
          p
            no-ssr(:placeholder="$t('description')")
              Dynamic(:template="$t('description')")
        el-col(:span="5", :offset="2", :xs="{span: 24, offset: 0}")
          el-card(class="box-card")
            h2 {{ $t("rightnow") }}
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae malesuada ex, eu tincidunt turpis.
        el-col(:span="5", :offset="1", :xs="{span: 24, offset: 0}")
          el-card(class="box-card")
            h2 Hello
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae malesuada ex, eu tincidunt turpis.
    img(src="~/assets/images/solman.svg", width="700", id="solman")
</template>

<script>
import Dynamic from "~/components/additional/Dynamic"
import _ from "lodash"

export default {
  layout: "dark",
  components: {
    Dynamic
  },
  filters: {
    uppercase: value => {
      return _.toUpper(value)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "assets/styles/fonts/trade-gothic-lt.sass"
// @import "assets/styles/fonts/bebas-neue.sass"
@import "assets/styles/fonts/proxima-nova.sass"


.main
  min-height: calc( 100vh - 60px - 16px )
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
  z-index: 1

.main-row
  display: flex
  flex-direction: row
  align-items: center

h1
  font-family: 'Proxima Nova Bold'
  font-weight: bold
  vertical-align: baseline
  letter-spacing: 4px

// p
//   font-family: 'Bebas Neue Bold', 'Roboto Mono', monospace
//   font-weight: 300
//   font-size: 15px
//   vertical-align: baseline

h1
  font-size: 24px

.box-card
  h2, p
    color: $color-text-dark

  h2
    font-family: 'Proxima Nova Bold'
    font-weight: bold
    vertical-align: baseline
    letter-spacing: 1px
    font-size: 20px
  
  p
    margin-top: -5px

#solman
  opacity: 0.02
  transform: rotate(-20deg)
  position: absolute
  top: -320px
  left: 0
</style>
