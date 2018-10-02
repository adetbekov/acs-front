<template lang="jade">
  div(:align="align")
    p(:style="getStyles")
      slot
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: "left"
    },
    italic: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "white"
    }
  },
  computed: {
    getStyles() {
      return {
        "text-align": this.align,
        "font-style": this.italic ? "italic" : null,
        "text-decoration": this.underline
      }
    }
  }
}
</script>


<style lang="sass" scoped>
  div
    width: 100%

    [align="center"]
      display: flex
      justify-content: center

    [align="right"]
      display: flex
      justify-content: flex-end

  p
    font-size: 17px
    letter-spacing: 0.7px
    color: $color-text-black
    margin: ($spacer * 2) 0

    @include screen(xs)
      width: 100%
    
    @include screen(sm)
      width: 85%
    
    @include screen(md)
      width: 75%
    
    @include screen(lg)
      width: 60%
      
</style>
