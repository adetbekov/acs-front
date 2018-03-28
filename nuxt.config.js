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
  modules: [
    "nuxt-sass-resources-loader",
    ["nuxt-i18n", require("./i18n/config")]
  ],
  sassResources: ["~/assets/styles/combine.sass"],
  css: [
    "element-ui/lib/theme-chalk/reset.css",
    "element-ui/lib/theme-chalk/index.css"
  ],
  plugins: ["~/plugins/element-ui"],
  build: {
    vendor: ["axios"],
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
      }
    }
  }
}
