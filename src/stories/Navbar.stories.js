import Vue from 'vue';
import { CButton, CButtonGroup, CFlex, CBox } from "@chakra-ui/vue";
import Navbar from '../components/Navbar';



export default {
    title: 'Components/Navbar',
    component: Navbar,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Navbar, CButton, CButtonGroup },
    template:
        `<Navbar color="gray.50" navTitleColor="primary.700">
        <c-button-group 
        :display="['flex','flex','flex']"
        :flexDirection="['column','row', 'row']"
        >
      <c-button
        my="4"
        size="md"
        variant-color="primary"
      >
        Work
      </c-button>
      <c-button
      my="4"
        size="md"
        variant-color="primary"
      >
        Projects
      </c-button>
      <c-button
      my="4"
        size="md"
        variant-color="secondary"
      >
        Contact Us
      </c-button>
      </c-button-group>
        </Navbar>`
});

export const Basic = Template.bind({});
Basic.args = {
    navbarColor: "primary.50",
    navTitleColor: "primary.600"
}