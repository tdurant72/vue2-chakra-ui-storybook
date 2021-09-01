<template>
  <c-theme-provider>
    <c-reset />
    <!--Your application goes here -->
    <Navbar 
      navbarColor="gray.50"  navTitleColor="primary.700"
    >
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
    </Navbar>
    <Hero 
      contentDirection="rtl"
      heroTitle="Transportation Funding"
      heroTitleColor="primary.500"
      heroContent="Despite rising traffic and freight travel in our state, the funds available to maintain our transportation system have not kept pace due to shrinking gas tax and federal revenues. Our investment needs are outgrowing our current funding, and this gap gets worse every year. That's why we're launching a new program — NCDOT Pathways. Through this program, we'll analyze new future-focused sources of funding for our transportation system that could better serve our communities for the next generation."
      buttonColor="secondary"
      buttonText="Contact Us"
      heroImageSrc="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/EX_Skyline_VisitNC_08_02_2019_02_Raleigh_skyline_b9e33ff4-fe60-491f-92bf-471708356d96.jpg"
      heroImageAlt="sky"
      showButton
      showHeroImage
    />
    <Gallery minChldWidth="250px" itemSpacing="10px">
      <Card
        showCardImage
        cardImageSrc="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        cardImageAlt="sky"
        headerText="Projects"
        headerColor="primary.500"
        contentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        showAvatar
        avatarTitle="John Doe"
		avatarTitleColor="secondary.500"
        avatarText="Follow me on github"
      />
      <Card
        showCardImage
        cardImageSrc="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        cardImageAlt="sky"
        headerText="Projects"
        headerColor="primary.500"
        contentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        showAvatar
        avatarTitle="John Doe"
        avatarText="Follow me on github"
      />
      <Card
        showCardImage
        cardImageSrc="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        cardImageAlt="sky"
        headerText="Projects"
        headerColor="primary.500"
        contentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        showAvatar
        avatarTitle="John Doe"
        avatarText="Follow me on github"
      />
    </Gallery>
      
  </c-theme-provider>
</template>

<script>
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Card from "./components/Card";
export default {
	name: "App",
	components: {
		Navbar,
		Hero,
		Gallery,
		Card
	}
};
</script>
