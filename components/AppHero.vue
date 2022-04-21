<template>
  <section
    class="h-screen bg-orange-lo"
    style="background-image: url('../assets/images/hero_image_cropped.JPEG')"
  >
    <h1 class="text-white text-7xl font-bold text-center py-20">
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
