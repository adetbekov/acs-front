<template lang="jade">
  span(@click="collapsed=!collapsed")
    transition(name="fade")
      span(v-if="collapsed", class="collapse") {{ short }}
      span(v-else, class="collapsed")
        slot
</template>

<script>
export default {
  props: {
    short: {
      type: String,
      default: "..."
    }
  },
  data() {
    return {
      collapsed: true
    }
  }
}
</script>

<style lang="sass" scoped>
span
  color: inherit
  font-size: inherit
  font-style: inherit
  font-weight: inherit

.collapse
  color: #27ae60
  cursor: pointer

  &:hover
    filter: brightness(120%)

.collapsed
  padding: 9px 0 1px
  border-bottom: 1.45px dotted
  border-color: gray
  border-opacity: 0.9
  // background-image: linear-gradient(to right, #95a5a6 50%, transparent 50%)
  // background-position: 0 1.25em
  // background-repeat: repeat-x
  // background-size: 3.4px 1.7px
  cursor: pointer

  &:hover
    filter: brightness(140%) saturate(1)

.fade-enter-active, .fade-leave-active 
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
  
</style>
