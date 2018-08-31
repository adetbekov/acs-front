export const state = () => ({
  post: null
})

export const getters = {
  getPost: state => state.post
}

export const mutations = {
  UPDATE: (state, post) => {
    state.post = post
  }
}

export const actions = {
  set: async ({ commit }, post) => {
    commit("UPDATE", post)
  }
}
