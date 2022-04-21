<template>
  <section>
    <div class="flex">
      <div class="flex flex-col justify-center gap-6">
        <h2 class="text-5xl bg-lo text-center font-semibold">
          {{ props.blok.title }}
        </h2>
        <p class="text-3xl text-center mx-64">{{ props.blok.text }}</p>
      </div>
      <div class="flex">
        <img
          class="mr-80 rounded-xl"
          :src="props.blok.image"
          alt="photo of Ashlyn"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
