<template>
  <div>
    <section>
      <AppHero
        :hero-text="'Your No. 1 stop for all you photography needs'"
      ></AppHero>
    </section>
    <div class="bg-orange-lo">
      <AboutSection :blok="components[0]" />
    </div>
  </div>
</template>

<script setup>
import { hostname } from "os";
import AboutSection from "~~/components/AboutSection.vue";

// access the storyblok build in function
const storyapi = useStoryApi();

// Fetch the data
const { data: home } = await storyapi.get("cdn/stories/home", {
  version: "draft",
});
// Make the data reactive
const state = reactive({ story: home.story });

// Making it faster to get info from the content
const pageContent = state.story;

// Make it easy to assign content from components
const components = state.story.content.body;
</script>
