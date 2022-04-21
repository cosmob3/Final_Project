<template>
  <section
    class="h-screen"
    style="background-image: url('../assets/images/Hero-image.JPEG')"
  >
    <h1 class="text-white text-7xl text-center pt-44">{{ heroText }}</h1>
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
