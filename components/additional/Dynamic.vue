<script>
import Vue from "vue/dist/vue.js"
import TextExpand from "~/components/additional/TextExpand"
import BlogHeader from "~/components/blog/BlogHeader"
import TextBlock from "~/components/blog/TextBlock"

export default {
  components: {
    TextExpand,
    BlogHeader,
    TextBlock
  },
  props: {
    template: {
      type: String,
      default: "<div></div>"
    },
    arguments: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      templateRender: null
    }
  },
  watch: {
    template: {
      immediate: true,
      handler() {
        const res = Vue.compile(`<span>${this.template}</span>`)
        this.templateRender = res.render
        this.$options.staticRenderFns = []
        this._staticTrees = []
        for (let i in res.staticRenderFns) {
          this.$options.staticRenderFns.push(res.staticRenderFns[i])
        }
      }
    }
  },
  render(h) {
    "use strict"
    if (!this.templateRender) {
      return h("div", "loading...")
    } else {
      return this.templateRender()
    }
  }
}
</script>
