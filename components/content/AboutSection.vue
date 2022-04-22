<template>
  <div class="grid sm:grid-cols-5 md:grid-cols-7 pt-8">
    <p
      class="sm:text-2xl md:text-3xl md:px-10 sm:col-start-2 md:col-start-2 sm:col-span-3 md:col-span-5 gap-6"
    >
      {{ props.blok.text }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
