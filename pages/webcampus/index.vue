<template lang="jade">
  el-container
    el-main
      p Webcampus  
        TextExpand(short="store") hey hey hey
</template>

<script>
import TextExpand from "~/components/additional/TextExpand"

export default {
  layout: "store",
  components: {
    TextExpand
  }
}
</script>
