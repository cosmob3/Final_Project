<template>
  <div class="grid grid-cols-7 pt-8">
    <div class="flex flex-col justify-center col-start-2 col-span-5 gap-6">
      <p class="text-3xl font-semibold px-10">
        {{ props.blok.text }}
      </p>
    </div>
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
