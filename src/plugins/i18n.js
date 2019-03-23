import VueI18n from 'vue-i18n'
import Vue from 'vue'
import eng from '@/lang/en.json'
import fre from '@/lang/fr.json'

Vue.use(VueI18n)
export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {en: eng, fr: fre}
})