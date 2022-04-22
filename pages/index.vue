<template>
  <div class="bg-orange-lo pb-24">
    <div class="pb-10">
      <AppHero :hero-text="'Your No. 1 stop for all you photography needs'">
        <template #button>
          <HeroCta />
        </template>
      </AppHero>
    </div>
    <div class="grid sm:grid-cols-5 md:grid-cols-7">
      <div
        class="flex flex-col justify-center sm:col-start-2 sm:col-span-3 gap-6"
      >
        <h2 class="text-5xl bg-lo text-center font-semibold">
          {{ state.story.content.title }}
        </h2>
        <p class="text-3xl text-center px-10">{{ state.story.content.text }}</p>
      </div>
      <div
        class="sm:pt-6 sm:col-start-2 sm:row-start-2 md:row-start-1 sm:col-span-3 md:col-start-5 md:col-end-7"
      >
        <img
          class="rounded-xl"
          :src="state.story.content.image"
          alt="photo of Ashlyn"
        />
      </div>
    </div>
    <section class="pt-10">
      <div class="grid sm:grid-cols-5 md:grid-cols-7">
        <div
          class="sm:col-start-2 md:col-start-2 md:row-start-1 sm:col-span-3 md:col-span-3"
        >
          <h3 class="text-3xl font-semibold pb-10">Some of my work</h3>
        </div>
        <!-- Image 1 -->
        <NuxtLink
          class="sm:col-start-2 md:col-start-2 sm:row-start-2 sm:col-span-3 md:col-span-1 sm:py-4 md:py-0"
          to="/portfolio/img1"
        >
          <img
            class="rounded-xl hover:scale-105"
            src="../../assets/images/D&N71.jpg"
            alt="Graduation Sample Image 1"
          />
        </NuxtLink>

        <!-- Shutter Spinner -->
        <img
          class="justify-self-center self-center hover:animate-[spin_2s_linear_infinite] sm:col-start-2 sm:row-start-3 md:col-start-3 md:row-start-2 sm:col-span-3 md:col-span-1 sm:py-4 md:py-0"
          src="~/assets/images/camera_logo.png"
          alt="Camera Shutter Icon"
        />

        <!-- Image 6 -->
        <NuxtLink
          class="md:col-start-4 sm:col-start-2 sm:row-start-4 md:row-start-2 sm:col-span-3 md:col-span-1 sm:py-4 md:py-0"
          to="/portfolio/img6"
        >
          <img
            class="rounded-xl hover:scale-105"
            src="~/assets/images/oso_w_sunflower.jpg"
            alt="Dog next to sunflower"
          />
        </NuxtLink>

        <!-- Shutter Spinner -->
        <img
          class="justify-self-center self-center hover:animate-[spin_2s_linear_infinite] sm:col-start-2 md:col-start-5 sm:row-start-5 md:row-start-2 sm:col-span-3 md:col-span-1 sm:py-4 md:py-0"
          src="~/assets/images/camera_logo.png"
          alt="Camera Shutter Icon"
        />

        <!-- Image 8 -->
        <NuxtLink
          class="md:col-start-6 sm:col-start-2 sm:row-start-6 md:row-start-2 sm:col-span-3 md:col-span-1 sm:py-4 md:py-0"
          to="/portfolio/img8"
        >
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
