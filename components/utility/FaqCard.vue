<template>
  <div>
    <h2 class="text-4xl font-extrabold pb-3">{{ question }}</h2>
    <p class="text font-medium text-3xl pt-3">{{ answer }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  question: {
    type: String,
    default: "Question?",
  },
  answer: {
    type: String,
    default: "Answer",
  },
});
</script>
