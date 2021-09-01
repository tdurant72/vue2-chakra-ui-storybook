<template>
    <c-simple-grid min-child-width="340px" spacing="20px"
        :maxW="['30em','48em','80em']"
        align="center"
        m="0 auto"
        py="8"
        gridAutoFlow="dense"
        :direction="contentDirection"
        alignItems="center"
    >
        <c-box m="4" v-if="showHeroImage">
            <c-image
                objectFit="cover"
                m="auto"
                :src="heroImageSrc"
                :alt="heroImageAlt"
             />
        </c-box>
        <c-box mx="6">
            <c-text 
                :fontSize="['xl','2xl','3xl', '4xl']"
                :color="heroTitleColor"
            >
                {{heroTitle}}
            </c-text>
            <c-text 
                my="3"
                :fontSize="['md','lg']"
                :color="heroContentColor"
            >
                {{heroContent}}
            </c-text>
            <c-button v-if="showButton"
                my="4"
                :variant-color="buttonColor"
                size="md"
                
            >
                {{buttonText}}
            </c-button>
        </c-box>
    </c-simple-grid>
</template>

<script>
export default {
	props: {
		contentDirection: {
			type: String,
			default: "row"
		},
		heroTitle: {
			type: String,
			required: true
		},
		heroTitleColor: {
			type: String,
			default: "gray.800"
		},
		heroContent: {
			type: String,
			required: true
		},
		heroContentColor: {
			type: String,
			default: "gray.600"
		},
		showButton: {
			type: Boolean,
			default: false
		},
		buttonText: {
			type: String
		},
		buttonColor: {
			type: String,
			default: "gray.600"
		},
		showHeroImage: {
			type: Boolean,
			default: false
		},
		heroImageSrc: {
			type: String
		},
		heroImageAlt: {
			type: String
		}
	}
};
</script>

<style lang="scss" scoped>
</style>