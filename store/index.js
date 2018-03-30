export const actions = {
  nuxtServerInit: ({ dispatch }, { req }) =>
    Promise.all([dispatch("auth/serverInit", { req })]),
  nuxtClientInit: ({ dispatch }) => Promise.all([dispatch("auth/clientInit")])
}
