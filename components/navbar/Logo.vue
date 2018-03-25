<template lang="jade">
	BlurShadow
		.logo
			img(:src="getLogoImage", :alt="getLogoAlt", :height="getLogoHeight")
			img(:src="getLogoText", :alt="getLogoAlt+'-text'", :height="getLogoHeight", class="hidden-xs-only")
</template>

<script>
import BlurShadow from "~/components/additional/BlurShadow"

export default {
  components: {
    BlurShadow
  },
  props: {
    logo: {
      type: String,
      default: "acs"
    }
  },
  data: () => ({
    logos: {
      acs: {
        img: "acs-logo.svg",
        text: "acs-logo-text.svg",
        alt: "ACS",
        height: 40,
        url: "/"
      },
      webcampus: {
        img: "webcampus-logo.svg",
        text: "webcampus-logo-text.svg",
        alt: "WebCampus",
        height: 30,
        url: "/webcampus"
      }
    }
  }),
  computed: {
    l() {
      return this.logos[this.logo]
    },
    getLogoImage() {
      return require("~/assets/images/" + this.l.img)
    },
    getLogoText() {
      return require("~/assets/images/" + this.l.text)
    },
    getLogoAlt() {
      return this.l.alt
    },
    getLogoHeight() {
      return this.l.height
    },
    getLogoUrl() {
      return this.l.url
    }
  }
}
</script>

<style lang="sass" scoped>
	.logo 
		display: flex
		justify-content: start
		align-items: center

		img:first-child 
			margin-right: 5px
</style>
