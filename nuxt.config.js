module.exports = {
  head: {
    title: "Adetbekov Creative Studio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Adetbekov Creative Studio"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: {
    name: "circle",
    color: "#3B8070",
    background: "white"
  },
  modules: [
    "@nuxtjs/axios",
    "nuxt-sass-resources-loader",
    ["nuxt-i18n", require("./i18n/config")]
  ],
  sassResources: ["~/assets/styles/combine.sass"],
  css: [
    "element-ui/lib/theme-chalk/reset.css",
    "element-ui/lib/theme-chalk/index.css"
  ],
  plugins: [
    "~/plugins/element-ui",
    "~/plugins/axios",
    { src: "~/plugins/nuxt-client-init.js", ssr: false }
  ],
  axios: {
    host: "localhost",
    prefix: "/api/",
    port: "8000"
  },
  build: {
    postcss: [
      require("postcss-nested")(),
      require("postcss-responsive-type")(),
      require("postcss-hexrgba")(),
      require("autoprefixer")()
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          enforce: "pre",
          test: /\.i18n$/,
          loader: `@kazupon/vue-i18n-loader?${JSON.stringify({
            includePaths: [require("path").resolve(__dirname), "node_modules"]
          })}`
        })
      }
    }
  }
}
