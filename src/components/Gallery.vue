<template>
    <c-simple-grid 
		:min-child-width="minChldWidth" 
		:spacing="itemSpacing" 
		:maxW="['30em','48em','80em']" 
		m="0 auto" py="8"
	>
       <slot/>
    </c-simple-grid>
</template>

<script>
// import Card from "./Card";
export default {
	name: "Gallery",
	// components: {
	// 	Card
	// },
	props: {
		minChldWidth: {
			type: String,
			default: "220px"
		},
		itemSpacing: {
			type: String,
			default: "10px"
		}
	}
};
</script>

<style lang="scss" scoped>
</style>