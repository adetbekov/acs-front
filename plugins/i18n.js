import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }, inject) => {
    app.i18n = new VueI18n({})
}