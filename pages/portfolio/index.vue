<template>
  <div>
    <section>
      <AppHero :hero-text="'Portfolio'"></AppHero>
    </section>
    <h2 class="text-center text-5xl p-20">Some of my favourites...</h2>
    <div class="grid gap-4 grid-cols-5">
      <!-- Image 1 -->
      <NuxtLink class="col-start-2 col-span-1" to="/portfolio/img1">
        <img
          class="rounded-xl hover:scale-105"
          src="../../assets/images/D&N71.jpg"
          alt="Graduation Sample Image 1"
        />
      </NuxtLink>

      <!-- Image 2 -->
      <NuxtLink to="/portfolio/img2">
        <img
          class="rounded-xl col-span-1 hover:scale-105"
          src="../../assets/images/D&N6.jpg"
          alt="Graduation Sample Image 2"
        />
      </NuxtLink>

      <!-- Image 3 -->
      <NuxtLink to="/portfolio/img3">
        <img
          class="rounded-xl col-span-1 hover:scale-105"
          src="../../assets/images/D&N66.jpg"
          alt="Graduation Sample Image 3"
        />
      </NuxtLink>

      <!-- Image 4 -->
      <NuxtLink class="col-start-2 row-start-2" to="/portfolio/img4">
        <img
          class="rounded-xl hover:scale-105"
          src="~/assets/images/oso_w_backlight.jpg"
          alt="Dog with backlight"
        />
      </NuxtLink>

      <!-- Image 5 -->
      <NuxtLink class="col-start-3 row-start-2" to="/portfolio/img5">
        <img
          class="rounded-xl hover:scale-105"
          src="~/assets/images/Sunflower.jpg"
          alt="Full colour sunflower with black and white background"
        />
      </NuxtLink>

      <!-- Image 6 -->
      <NuxtLink class="col-start-4 row-start-2" to="/portfolio/img6">
        <img
          class="rounded-xl hover:scale-105"
          src="~/assets/images/oso_w_sunflower.jpg"
          alt="Dog next to sunflower"
        />
      </NuxtLink>

      <!-- Image 7 -->
      <NuxtLink class="col-start-2 row-start-3" to="/portfolio/img7">
        <img
          class="rounded-xl hover:scale-105"
          src="../../assets/images/halloween_shoot_3.jpg"
          alt="Halloween Shoot - Hammer Man"
        />
      </NuxtLink>

      <!-- Image 8 -->
      <NuxtLink class="col-start-3 row-start-3" to="/portfolio/img8">
        <img
          class="rounded-xl hover:scale-105"
          src="../../assets/images/halloween_shoot_1.jpg"
          alt="Halloween Shoot - Red Riding Hood"
        />
      </NuxtLink>

      <!-- Image 9 -->
      <NuxtLink class="col-start-4 row-start-3" to="/portfolio/img9">
        <img
          class="rounded-xl hover:scale-105"
          src="~/assets/images/halloween_shoot_2.jpg"
          alt="Halloween Shoot - Decapitated Wolf"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const images = [];
</script>
