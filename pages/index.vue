<i18n>
{
	"en": {
    "hello": "Hello",
    "description": "I'm Yeldos, a <TextExpand short='Fullstack'>Full Stack веб-разработчик – это квалифицированный специалист, который способен принимать активное участие во всех этапах разработки веб-приложений, начиная от серверной логики и ее реализации с помощью различных технологий и фреймворков, и заканчивая клиентским кодом, работающим непосредственно в браузере.</TextExpand> web-developer from Almaty. I'm looking for beauty in everything, in code, animation, interactive and generative design. Welcome to Adetbekov Creative Studio!",
    "rightnow": "Right Now",
    "blog": "Blog",
    "about": "About me",
    "portfolio": "Portfolio",
    "rightnow-empty-content": "Oops, there is no any notes...",
    "rightnow-empty-mood": "🤭 shame"
	},
	"ru": {
    "hello": "Привет",
    "description": "Я - Елдос, <TextExpand short='Fullstack'>Full Stack веб-разработчик – это квалифицированный специалист, который способен принимать активное участие во всех этапах разработки веб-приложений, начиная от серверной логики и ее реализации с помощью различных технологий и фреймворков, и заканчивая клиентским кодом, работающим непосредственно в браузере.</TextExpand> веб-разработчик из Алматы. Ищу красоту во всём, в коде, анимации, интерактивности и генеративном дизайне. Добро пожаловать в Adetbekov Creative Studio!\n<nuxt-link to='webcampus'>Webcampus</nuxt-link>",
    "rightnow": "Прямо сейчас",
    "blog": "Блог",
    "about": "Обо мне",
    "portfolio": "Портфель",
    "rightnow-empty-content": "Ой, тут пока нет записей...",
    "rightnow-empty-mood": "🤭 стыд"
	},
	"kz": {
    "hello": "Sälem",
    "description": "Meniń esimim Eldos. Men - Almatınıń <TextExpand short='Fullstack'>Full Stack веб-разработчик – это квалифицированный специалист, который способен принимать активное участие во всех этапах разработки веб-приложений, начиная от серверной логики и ее реализации с помощью различных технологий и фреймворков, и заканчивая клиентским кодом, работающим непосредственно в браузере.</TextExpand> web-damıtıwcısımın. Barlık jerde sulwlıktı izdeymin, kodta, änimecinde, interektevte jäne jeneretevti diyzaynda. Adetbekov Creative Studio jobasına koc keldińiz!",
    "rightnow": "Däl käzir",
    "blog": "Bülek",
    "about": "Men tuwralı",
    "portfolio": "Pörtpil",
    "rightnow-empty-content": "Op, äzirge mına arada jazıwlar jok...",
    "rightnow-empty-mood": "🤭 uyat-ay"
	}
}
</i18n>

<template lang="jade">
  el-container
    el-main.main
      el-row.main-row
        el-col(:span="10", :offset="0", :xs="{span: 24, offset: 0}")
          h1 {{ $t("hello") | uppercase }}
          img(src="~/assets/images/waves.svg", width="100")
          br
          p
            no-ssr(:placeholder="$t('description')")
              Dynamic(:template="$t('description')")
          br
          Copyright
        el-col(:span="5", :offset="2", :xs="{span: 24, offset: 0}")
          el-card(class="box-card rightnow")
            div.header
              h2 {{ $t("rightnow") }}
              span {{ getRightnowTime }}
            p {{ getRightnowContent }}
            span {{ getRightnowMood }}
        el-col(:span="5", :offset="2", :xs="{span: 24, offset: 0}", class="menu")
          h1 {{ $t("blog") }}
          h1 {{ $t("about") }}
          h1 {{ $t("portfolio") }}
    //- img(src="~/assets/images/orda.png", width="350", id="belka")
</template>

<script>
import _ from "lodash"
import moment from "moment"
import Dynamic from "~/components/additional/Dynamic"
import Copyright from "~/components/footer/Copyright"
import BlurShadow from "~/components/additional/BlurShadow"

export default {
  layout: "dark",
  components: {
    Dynamic,
    BlurShadow,
    Copyright
  },
  async asyncData({ app }) {
    let [rightnowRes] = await Promise.all([app.$axios.get("rightnow/all")])
    return {
      rightnow: rightnowRes.data
    }
  },
  filters: {
    uppercase: value => {
      return _.toUpper(value)
    }
  },
  computed: {
    getLastRightnow() {
      return _.filter(this.rightnow, { locale_code: this.$i18n.locale })[0]
    },
    getRightnowTime() {
      try {
        return moment(this.getLastRightnow.created)
          .locale(this.$i18n.locale)
          .format("MMM D")
      } catch (e) {
        return ""
      }
    },
    getRightnowContent() {
      try {
        return this.getLastRightnow.content
      } catch (e) {
        return this.$t("rightnow-empty-content")
      }
    },
    getRightnowMood() {
      try {
        return this.getLastRightnow.mood
      } catch (e) {
        return this.$t("rightnow-empty-mood")
      }
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
  opacity: 0.025
  transform: rotate(-20deg)
  position: absolute
  top: -320px
  left: 0px

#belka
  opacity: 0.035
  position: absolute
  right: -120px
  bottom: -170px

.rightnow
  .header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 16.6px

    h2
      margin: 0

  span
    color: $color-text-gray

// .relative-p
//   position: relative

// .back-block
//   position: absolute 
//   width: 75%
//   height: 90%
//   background-color: rgba(255,0,0,0.1)
//   bottom: -15px
//   left: -15px
//   z-index: -1

</style>
