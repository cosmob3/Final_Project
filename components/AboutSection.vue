<template>
  <section>
    <div class="grid grid-cols-7">
      <div class="flex flex-col justify-center col-start-2 col-span-3 gap-6">
        <h2 class="text-5xl bg-lo text-center font-semibold">
          {{ props.blok.title }}
        </h2>
        <p class="text-3xl text-center px-10">{{ props.blok.text }}</p>
      </div>
      <div class="col-start-5 col-end-7">
        <img class="rounded-xl" :src="props.blok.image" alt="photo of Ashlyn" />
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
