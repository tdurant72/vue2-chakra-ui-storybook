import Vue from 'vue';
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import customTheme from '../src/customTheme';
Vue.use(Chakra, {
  extendTheme: customTheme
});
export const decorators = [(story) => ({
  components: {
    story,
  },
  template: '<story/>'
})]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators
}
