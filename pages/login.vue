<template lang="jade">
  el-main
    input(type="username", class="w-100 mb-3", :placeholder="username", autocomplete="off", autocorrect="off", autocapitalize="off", spellcheck="false", v-model="username", @keyup.13="login()", autofocus)
    input(type="password", class="col-md-11 col-sm-11 col-xs-11", :placeholder="password", v-model="password", @keyup.13="login()")
    el-button(@click="login()") Login
</template>

<script>
export default {
  middleware: "notAuthenticated",
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    login() {
      this.$axios
        .post("auth/login", {
          username: this.username,
          password: this.password
        })
        .then(
          response => {
            this.$store.dispatch("auth/set", response.data.token)
            this.$router.push("/")
            this.password = ""
          },
          response => {
            console.log(response.statusText)
            // this.shakeAnimation(this.$refs.login)
          }
        )
    }
  }
}
</script>
