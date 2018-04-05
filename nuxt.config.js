const nodeExternals = require("webpack-node-externals")

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
    "~/plugins/font-awesome",
    { src: "~/plugins/nuxt-client-init.js", ssr: false }
  ],
  axios: {
    host: "localhost",
    prefix: "/api/",
    port: "8000"
  },
  build: {
    vendor: ["vue-awesome"],
    postcss: [
      require("postcss-nested")(),
      require("postcss-responsive-type")(),
      require("postcss-hexrgba")(),
      require("autoprefixer")()
    ],
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
        // config.module.rules.find(
        //   el => el.loader === "vue-loader"
        // ).options.loaders.i18n =
        //   "@kazupon/vue-i18n-loader"
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [
              /es6-promise|\.(?!(?:js|json)$).{1,5}$/i,
              /^vue-awesome/
            ]
          })
        ]
      }
    }
  }
}
