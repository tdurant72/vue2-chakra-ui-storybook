<template>
    <c-flex 
        as="nav"
        align="center"
        justify="space-around"
        wrap="wrap"
        w="100%"
        mb="2"
        py="4"
        :bg="navbarColor"
    >
        <c-flex align="center">
            <c-text 
                :color="navTitleColor" 
                :fontSize="['lg','xl','2xl']"
            >
            Web Services
            </c-text>
        </c-flex>
        <c-box
            :display="['flex','flex','none']"
        >   
            <c-button ref="mobileMenu" left-icon="triangle-down" variant-color="primary" @click="isOpen = true">Menu</c-button>
        </c-box>
        <c-box :display="['none','none','flex']" >
            <slot/>
        </c-box>
        <c-drawer
            :isOpen="isOpen"
            placement="right"
            :on-close="close"
        >
        <c-drawer-overlay />
        <c-drawer-content>
            <c-drawer-close-button/>
            <c-drawer-body my="10%">
                <slot/>
            </c-drawer-body>
        </c-drawer-content>
        </c-drawer>
    </c-flex>
</template>

<script>
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CFlex, CText, CDrawer } from "@chakra-ui/vue";

export default {
	name: "Navbar",
	// props: ["navbarColor", "navTitleColor"],
	components: {
		CFlex,
		CText,
		CDrawer
	},
	props: {
		navbarColor: {
			type: String,
			default: "transparent"
		},
		navTitleColor: {
			type: String,
			default: "gray.800"
		}
	},
	data() {
		return {
			isOpen: false
		};
	},
	methods: {
		close() {
			this.isOpen = false;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>