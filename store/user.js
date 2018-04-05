export const state = () => ({
  current: null,
  loaded: null
})

export const actions = {
  set: async ({ commit }, { app }) => {
    let now = new Date()
    app.$axios.get("accounts/current").then(
      response => {
        commit("UPDATE", [response.data, now])
      },
      response => {
        console.log(response.statusText)
      }
    )
  },
  remove: ({ commit }) => {
    commit("REMOVE")
  },
  clientInit: ({ getters, rootGetters, dispatch }, { app }) => {
    if (rootGetters["auth/isAuthenticated"] && !getters.getUser) {
      dispatch("set", { app })
    }
  }
}

export const getters = {
  getUser: state => state.current,
  getUsername: (state, getters) =>
    getters.getUser ? getters.getUser.username : "",
  getId: (state, getters) => (getters.getUser ? getters.getUser.id : "")
}

export const mutations = {
  UPDATE: (state, [user, time]) => {
    state.current = user
    state.loaded = time
  },
  REMOVE: state => {
    state.current = null
    state.loaded = null
  }
}
