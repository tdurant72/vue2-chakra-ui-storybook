import Vue from 'vue'
import customTheme from './customTheme';
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import App from './App.vue'

Vue.use(Chakra, {
  extendTheme: customTheme
})

new Vue({
  el: '#app',
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount()
