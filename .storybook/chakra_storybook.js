import Vue from 'vue';
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import customTheme from '../src/customTheme';
Vue.use(Chakra, {
    extendTheme: customTheme
});
export default new Chakra();
