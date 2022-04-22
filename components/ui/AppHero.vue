<template>
  <section
    class="sm:pb-96 md:h-screen bg-orange-lo"
    style="background-image: url('../assets/images/hero_image_cropped.JPEG')"
  >
    <h1 class="text-white sm:text-5xl md:text-7xl font-bold text-center py-20">
      {{ heroText }}
    </h1>
    <slot name="button"></slot>
  </section>
</template>

<script setup>
const props = defineProps({
  heroText: {
    type: String,
    default: "Hero Text",
  },
});
</script>
