<i18n>
{
  "en": {
    "last": "Last",
    "all_categories": "All categories",
    "all": "All",
    "all_tags": "All tags",
    "search": "Search for blog"
  },
  "ru": {
    "last": "Последние",
    "all_categories": "Все категории",
    "all": "Все",
    "all_tags": "Все теги",
    "search": "Поиск по блогу"
  },
  "kz": {
    "last": "Songı",
    "all_categories": "Barlık sanattar",
    "all": "Bäri",
    "all_tags": "Barlık täkter",
    "search": "Blogta izdew"
  }
}
</i18n>

<template lang="jade">
  el-container.container
    el-main
      el-row(:gutter="30")
        el-col(:span="18", :xs="{span: 24, offset: 0}")
          h6 {{ $t("last") }}:
          PostsListLoader(v-if="this.placeholder_posts" class="post--list--loader")
          ul(class="headlines")
            li(v-for="p in filtered_posts")
              p {{ mom(p.created) }}
              nuxt-link(:to="{ name: 'post', params: { id: p.id } }") {{ p.title }}
              
        el-col(:span="6", :xs="{span: 24, offset: 0}")
          .selector(data-margin-top="40")
            div(class="search")
              div
                fa(name="search")
              input(class="fw-300", type="text", :placeholder="$t('search')", v-model="search")
            br
            div(class="button", :class="{ 'mb-4': !this.categoriesCollapsed }", @click="collapse_categories_toggle")
              h6(v-if="this.category == 'all'")
                u {{ plusOrMinus(this.categoriesCollapsed) }} {{ $t("all_categories") }}

              h6(class="category_selected change-icon" v-else)
                span(class="fa")
                  fa(name="checkcircleo" scale="0.7")
                  span {{ category }}
                span(class="fa red")
                  fa(name="timescircleo" scale="0.7") 
                  span {{ category }}

            transition(@enter="toggleWidthAnimation", @leave="collapseWidthAnimation")
              div(class="tags", v-if="!this.categoriesCollapsed")
                input(type="radio", id="category_all", name="categories", value="all", v-model="category")
                label(for="category_all") {{ $t("all") }}
                
                div(v-for="c in categories")
                  input(type="radio", :id="`category_${c.name}`", name="categories", :value="c.name", v-model="category")
                  label(:for="`category_${c.name}`") {{ c.name }}
    
            h6(class="tags_toggle button", :class="{ 'mb-4': !this.tagsCollapsed }",  @click="collapse_tags_toggle")
              u {{ plusOrMinus(tagsCollapsed) }} {{ $t("all_tags") }}

            transition(@enter="toggleWidthAnimation", @leave="collapseWidthAnimation")
              div(class="tags", v-if="!this.tagsCollapsed")
                input(type="radio", id="tag_all", name="tags", value="all", v-model="tag")
                label(for="tag_all") {{ $t("all") }}

                div(v-for="t in tags", :class="{ 'disabled': disable_tag(t.categories) }")
                  input(type="radio", :id="`tag_${t.name}`", name="tags", :value="t.name", v-model="tag")
                  label(:for="`tag_${t.name}`")
                    {{ t.name }} &nbsp;
                    small(class="small") {{ t.count }}

</template>

<script>
import PostsListLoader from "~/components/blog/PostsListLoader"
import _ from "lodash"
import moment from "moment"
import Sticky from "sticky-js"
import { TimelineLite, Power2 } from "gsap"

export default {
  layout: "blog",
  components: {
    PostsListLoader
  },
  props: {
    flipping: {
      type: Boolean,
      default: false
    }
  },
  async asyncData({ app }) {
    if (!app.flipping) {
      let [categoriesRes, tagsRes, postsRes] = await Promise.all([
        app.$axios.get("blog/categories"),
        app.$axios.get("blog/tags"),
        app.$axios.get("blog/posts")
      ])
      return {
        categories: categoriesRes.data,
        tags: tagsRes.data,
        posts: postsRes.data
      }
    }
  },
  data() {
    return {
      search: "",
      category: "all",
      tag: "all",
      tagsCollapsed: true,
      categoriesCollapsed: false
    }
  },
  computed: {
    placeholder_posts() {
      return this.flipping || !this.posts
    },
    placeholder_categories() {
      return this.flipping || !this.categories
    },
    placeholder_tags() {
      return this.flipping || !this.tags
    },
    filteredByCategory() {
      return _.filter(this.posts, el => {
        return this.category == "all"
          ? true
          : el.category.name === this.category
      })
    },
    filteredByTag() {
      return _.filter(this.filteredByCategory, el => {
        return this.tag == "all" ? true : _.some(el.tags, { name: this.tag })
      })
    },
    filtered_posts() {
      return _.filter(this.filteredByTag, el => {
        return _.includes(_.toLower(el.title), _.toLower(this.search))
      })
    }
  },
  watch: {
    category(c) {
      if (c != "all") {
        this.categoriesCollapsed = true
        this.tagsCollapsed = false
      }
      this.tag = "all"
    }
  },
  mounted() {
    let sticky = new Sticky(".selector") // eslint-disable-line
  },
  methods: {
    mom(date) {
      return moment(date)
        .locale(this.$i18n.locale)
        .format("MMM D, YYYY")
    },
    plusOrMinus(b) {
      return b ? "+" : "−"
    },
    collapse_categories_toggle() {
      this.categoriesCollapsed = !this.categoriesCollapsed
    },
    collapse_tags_toggle() {
      this.tagsCollapsed = !this.tagsCollapsed
    },
    collapseWidthAnimation(el, done) {
      let tl = new TimelineLite()
      tl.set(el, { y: 24 }).to(el, 0.4, {
        opacity: 0,
        height: 0,
        ease: Power2.easeOut,
        onComplete: done
      })
    },
    toggleWidthAnimation(el, done) {
      let tl = new TimelineLite()
      tl.from(el, 0.4, {
        opacity: 0,
        height: 0,
        ease: Power2.easeOut,
        onComplete: done
      })
    },
    disable_tag(c) {
      return this.category == "all" ? 0 : _.indexOf(c, this.category)
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  padding-top: 25px

h6
  font-size: 1rem
  margin-bottom: 0.5rem
  font-family: inherit
  line-height: 1.1
  display: block
  color: #3498db
  font-weight: 300

.post--list--loader
  margin: 20px 0

ul
  padding: 0
  margin: 0
  list-style: none

.headlines 
  padding: 20px 0

  li
    display: flex
    margin-bottom: 20px

  p
    min-width: 100px
    font-weight: 100
    margin-right: 1.5rem
    font-size: 1rem

  a
    font-size: 1.25rem
    font-weight: 300
    color: #2c3e50!important
    cursor: pointer

    &:hover 
      color: #3498db!important
      cursor: pointer

.search
  padding: 4px 0
  display: flex
  align-items: center
  color: #AAB6BD
  border-bottom: 1px solid rgba(0, 0, 0, 0.3)
  transition: all 0.3s ease-in-out

  input
    background: none
    padding: 0px 0px 3px 10px
    font-size: 18px
    border: none
    outline: none
    font-weight: 300

u
	text-decoration: none

.button 
  cursor: pointer
  margin-bottom: 0px
  user-select: none

  u:hover 
    border-bottom: 1px solid #3498db

.red
	color: #e74c3c

.category_selected
	color: #27ae60

.change-icon > .fa + .fa, .change-icon:hover > .fa 
	display: none

.change-icon:hover > .fa + .fa 
	display: inherit

.change-icon .fa svg
  margin-right: 3px

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

.disabled
  opacity: 0.4
  pointer-events: none

.mb-4
  margin-bottom: 1.5rem

.tags_toggle
  margin-top: 1rem

.small
  font-size: 80%

small 
  font-size: 80%

h6
  margin: 0
</style>
