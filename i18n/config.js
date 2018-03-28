module.exports = {
  locales: [
    {
      code: "ru",
      iso: "ru-RU",
      name: "Русский"
    },
    {
      code: "en",
      iso: "en-US",
      name: "English"
    },
    {
      code: "kz",
      iso: "kz-KZ",
      name: "Kazakca"
    }
  ],
  defaultLocale: "ru",
  useRedirectCookie: true,
  detectBrowserLanguage: true,
  noPrefixDefaultLocale: true,
  redirectCookieKey: "redirected",
  vueI18n: {
    fallbackLocale: "en",
    messages: {
      en: {
        welcome: "Welcome"
      },
      ru: {
        welcome: "Привет"
      },
      kz: {
        welcome: "Sälem"
      }
    }
  }
}
