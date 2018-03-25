export const state = () => ({
    animating: false
})

export const getters = {
    isAnimating: state => state.animating
}

export const mutations = {
    toggle_animation(state) {
        state.animating = !state.animating
    }
}