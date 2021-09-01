<template>
    <c-box 
        boxShadow="0px 8px 4px 2px rgb(42 42 42 / 50%)"
        p="8"
        overflow="hidden"
		border="1px" borderRadius="md" borderColor="gray.200"
    >
        <c-box v-if="showCardImage">
            <c-image 
                :src="cardImageSrc"
                :alt="cardImageAlt"
                objectFit="cover"
            />
        </c-box>
        <c-box>
            <c-text
                :color="headerColor"
                fontSize="2xl"
            >
                {{headerText}}
            </c-text>
            <c-text
                :color="contentColor"
                fontSize="lg"
            >
                {{contentText}}
            </c-text>
            <c-flex v-if="showAvatar" pt="4">
                <c-avatar size="md" name="avatarTitle" src="avatarSrc"/>
                <c-box px="8">
                    <c-text :color="avatarTitleColor" fontSize="lg">
                        {{avatarTitle}}
                    </c-text>
                    <c-text :color="avatarContentColor">
                        {{avatarText}}
                    </c-text>
                </c-box>
            </c-flex>
        </c-box>
    </c-box>
</template>

<script>
export default {
	props: {
		showCardImage: {
			type: Boolean,
			default: false
		},
		cardImageSrc: {
			type: String
		},
		cardImageAlt: {
			type: String
		},
		headerText: {
			type: String
		},
		headerColor: {
			type: String,
			default: "gray.800"
		},
		contentText: {
			type: String
		},
		contentColor: {
			type: String,
			default: "gray.600"
		},
		showAvatar: {
			type: Boolean,
			boolean: false
		},
		avatarSrc: {
			type: String
		},
		avatarTitle: {
			type: String
		},
		avatarText: {
			type: String
		},
		avatarTitleColor: {
			type: String,
			default: "secondary.500"
		},
		avatarContentColor: {
			type: String,
			default: "gray.500"
		}
	}
};
</script>

<style lang="scss" scoped>
</style>