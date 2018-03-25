<script>
import { mapGetters } from "vuex"

export default {
  data: () => ({
    height: 0,
    width: 0
  }),
  computed: {
    getSize() {
      return {
        "min-height": this.height + "px",
        "min-width": this.width + "px"
      }
    },
    ...mapGetters({
      hideBackground: "additional/isAnimating"
    })
  },
  mounted() {
    this.resizeWindow()
    window.addEventListener("resize", () => {
      this.resizeWindow()
    })
  },
  methods: {
    resizeWindow() {
      this.height = this.$slots.default[0].elm.clientHeight
      this.width = this.$slots.default[0].elm.clientWidth
    }
  },
  render(h) {
    return h(
      "div",
      {
        class: ["blur-shadow"],
        style: this.getSize
      },
      [
        h(
          "div",
          { class: { hidden: this.hideBackground }, style: this.getSize },
          this.$slots.default
        ),
        h("div", { style: this.getSize }, this.$slots.default)
      ]
    )
  }
}
</script>

<style lang="sass" scoped>
	.blur-shadow 
		display: block
		position: relative

		div 
			position: absolute

		div:nth-child(2)
			width: 100%
			height: 100%
			opacity: 0.9
			padding-top: 10px
			pointer-events: none
			transform: scale(0.9)
			filter: blur(13px) brightness(95%) saturate(2)
	
	.hidden 
		display: none
</style>
