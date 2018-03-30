<template lang="jade">
  el-main
    el-button Secret
</template>

<script>
export default {
  middleware: "authenticated"
}
</script>
