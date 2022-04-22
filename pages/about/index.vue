<template>
  <div class="pb-24">
    <div class="pb-10">
      <AppHero :hero-text="'About Me'"></AppHero>
    </div>
    <div class="grid grid-cols-7">
      <div class="flex flex-col justify-center col-start-2 col-span-3 gap-6">
        <h2 class="text-5xl bg-lo text-center font-semibold">
          {{ state.story.content.title }}
        </h2>
        <p class="text-3xl font-semibold px-10 py-20">
          {{ state.story.content.text }}
        </p>
      </div>
      <div class="col-start-5 col-end-7">
        <img
          class="rounded-xl"
          :src="state.story.content.image"
          alt="photo of Ashlyn"
        />
      </div>
    </div>
    <div class="pt-10">
      <div class="grid grid-cols-7">
        <h3 class="col-start-2 col-span-2 text-3xl font-extrabold">
          A little about me
        </h3>
      </div>
      <AboutSection :blok="state.story.content.body[0]" />
    </div>
  </div>
</template>

<script setup>
import { hostname } from "os";
import AboutSection from "~~/components/content/AboutSection.vue";
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
