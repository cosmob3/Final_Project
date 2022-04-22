<template>
  <div>
    <p class="text-3xl text-center px-10">{{ props.blok.text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
console.log(blok);
</script>
