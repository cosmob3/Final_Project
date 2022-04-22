<template>
  <div class="bg-orange-lo pb-24">
    <div class="pb-10">
      <AppHero :hero-text="'Your No. 1 stop for all you photography needs'">
        <template #button>
          <HeroCta />
        </template>
      </AppHero>
    </div>
    <div class="grid grid-cols-7">
      <div class="flex flex-col justify-center col-start-2 col-span-3 gap-6">
        <h2 class="text-5xl bg-lo text-center font-semibold">
          {{ state.story.content.title }}
        </h2>
        <p class="text-3xl text-center px-10">{{ state.story.content.text }}</p>
      </div>
      <div class="col-start-5 col-end-7">
        <img
          class="rounded-xl"
          :src="state.story.content.image"
          alt="photo of Ashlyn"
        />
      </div>
    </div>
    <section class="pt-10">
      <div class="grid grid-cols-7">
        <div class="col-span-7 col-start-2">
          <h3 class="text-3xl font-semibold pb-10">Some of my work</h3>
        </div>
        <!-- Image 1 -->
        <NuxtLink class="col-start-2" to="/portfolio/img1">
          <img
            class="rounded-xl hover:scale-105"
            src="../../assets/images/D&N71.jpg"
            alt="Graduation Sample Image 1"
          />
        </NuxtLink>

        <!-- Shutter Spinner -->
        <img
          class="justify-self-center self-center hover:animate-[spin_2s_linear_infinite]"
          src="~/assets/images/camera_logo.png"
          alt="Camera Shutter Icon"
        />

        <!-- Image 6 -->
        <NuxtLink class="col-start-4" to="/portfolio/img6">
          <img
            class="rounded-xl hover:scale-105"
            src="~/assets/images/oso_w_sunflower.jpg"
            alt="Dog next to sunflower"
          />
        </NuxtLink>

        <!-- Shutter Spinner -->
        <img
          class="justify-self-center self-center hover:animate-[spin_2s_linear_infinite]"
          src="~/assets/images/camera_logo.png"
          alt="Camera Shutter Icon"
        />

        <!-- Image 8 -->
        <NuxtLink class="col-start-6" to="/portfolio/img8">
          <img
            class="rounded-xl hover:scale-105"
            src="../../assets/images/halloween_shoot_1.jpg"
            alt="Halloween Shoot - Red Riding Hood"
          />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { hostname } from "os";
import HeroButton from "~~/components/content/HeroCta.vue";

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
