<template lang="jade">
  el-container
    el-main
      no-ssr(:placeholder="post.content")
        Dynamic(:template="post.content" v-cloak)
      br
      div(class="tags")
        nuxt-link(:to="`tags/${t.name}`", v-for="t in post.tags", :key="t.name") {{ t.name }}
</template>

<script>
import Dynamic from "~/components/additional/Dynamic"
import { mapGetters } from "vuex"

export default {
  layout: "blog",
  async fetch({ store, params, app }) {
    await app.$axios.get(`blog/${params.post}/`).then(
      res => {
        store.dispatch("blog/set", res.data)
      },
      err => {
        console.log(err.statusText)
      }
    )
  },
  components: {
    Dynamic
  },
  computed: {
    ...mapGetters({
      post: "blog/getPost"
    })
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
  // width: 100%

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
