export const state = () => ({
  animating: false
})

export const getters = {
  isAnimating: state => state.animating
}

export const mutations = {
  TOGGLE_ANIMATION(state) {
    state.animating = !state.animating
  }
}
