<template>
  <div class="flex justify-center py-24">
    <p class="text-center p-20">
      {{ $route.params.group }} - {{ $route.params.img }}
    </p>
    <img
      class="rounded-xl sm:w-screen md:w-auto md:h-screen"
      src="~/assets/images/D&N71.jpg"
      alt="Graduation Sample Image 1"
    />
  </div>
</template>

<script setup>
const route = useRoute();

if (route.params.group === "admins" && !route.params.img) {
  console.log("Warning! Make sure user is authenticated!");
}
</script>
