<template lang="jade">
  el-container
    el-main
      no-ssr(:placeholder="post.content")
        Dynamic(:template="post.content", :arguments="[{post: this.post}]" v-cloak)
      br
      div(class="tags")
        nuxt-link(:to="`tags/${t.name}`", v-for="t in post.tags", :key="t.name") {{ t.name }}
</template>

<script>
import Dynamic from "~/components/additional/Dynamic"

export default {
  layout: "blog",
  async asyncData({ app, params }) {
    let { data } = await app.$axios.get(`blog/${params.post}/`)
    return {
      post: data
    }
  },
  components: {
    Dynamic
  }
}
</script>

<style lang="sass" scoped>
.tags label, .tags a 
  display: block
  max-height: 27px
  color: #2c3e50
  font-size: 13px
  letter-spacing: 0
  text-decoration: none
  background: #f1f1f1
  border-radius: 3px
  line-height: 1.1
  padding: 6px 10px 7px
  margin: 0px 10px 10px 0px
  vertical-align: middle
  cursor: pointer
  user-select: none

.tags label, .tags a:hover
  background-color: #ebebeb

.tags input[type="radio"]
  display: none

.tags input[type="radio"]:checked+label
  color: #3498db

.tags
  display: flex
  flex-wrap: wrap
  max-width: 100%
  overflow: hidden

[v-cloak]
  display: none !important
</style>
