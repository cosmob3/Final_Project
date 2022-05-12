<template>
  <div>
    <section>
      <AppHero :hero-text="'Portfolio'"></AppHero>
    </section>
    <h2 class="text-center sm:text-3xl md:text-5xl font-extrabold p-20">
      Some of my favourites...
    </h2>
    <div class="grid gap-4 sm:grid-cols-6 md:grid-cols-5 pb-24">
      <!-- Image 1 -->
      <NuxtLink
        class="sm:col-start-2 md:col-start-2 sm:col-span-2 md:col-span-1"
        to="/portfolio/images-admin/img"
      >
        <img
          class="rounded-xl hover:scale-105"
          src="../../assets/images/D&N71.jpg"
          alt="Graduation Sample Image 1"
        />
      </NuxtLink>

      <!-- Image 2 -->
      <NuxtLink
        class="sm:col-start-4 md:col-start-3 sm:col-span-2 md:col-span-1"
        to="/portfolio/img2"
      >
        <img
          class="rounded-xl sm:col-span-2 md:col-span-1 hover:scale-105"
          src="../../assets/images/D&N6.jpg"
          alt="Graduation Sample Image 2"
        />
      </NuxtLink>

      <!-- Image 3 -->
      <NuxtLink
        class="sm:col-start-2 md:col-start-4 sm:row-start-2 md:row-start-1 sm:col-span-2 md:col-span-1"
        to="/portfolio/img3"
      >
        <img
          class="rounded-xl col-span-1 hover:scale-105"
          src="../../assets/images/D&N66.jpg"
          alt="Graduation Sample Image 3"
        />
      </NuxtLink>

      <!-- Image 4 -->
      <NuxtLink
        class="sm:col-start-4 sm:row-start-2 md:col-start-2 sm:col-span-2 md:col-span-1"
        to="/portfolio/img4"
      >
        <img
          class="rounded-xl hover:scale-105"
          src="~/assets/images/oso_w_backlight.jpg"
          alt="Dog with backlight"
        />
      </NuxtLink>

      <!-- Image 5 -->
      <NuxtLink
        class="sm:col-start-2 sm:row-start-3 md:col-start-3 md:row-start-2 sm:col-span-2 md:col-span-1"
        to="/portfolio/img5"
      >
        <img
          class="rounded-xl hover:scale-105"
          src="~/assets/images/Sunflower.jpg"
          alt="Full colour sunflower with black and white background"
        />
      </NuxtLink>

      <!-- Image 6 -->
      <NuxtLink
        class="sm:col-start-4 sm:row-start-3 md:col-start-4 md:row-start-2 sm:col-span-2 md:col-span-1"
        to="/portfolio/img6"
      >
        <img
          class="rounded-xl hover:scale-105"
          src="~/assets/images/oso_w_sunflower.jpg"
          alt="Dog next to sunflower"
        />
      </NuxtLink>

      <!-- Image 7 -->
      <NuxtLink
        class="sm:col-start-2 sm:row-start-4 md:col-start-2 md:row-start-3 sm:col-span-2 md:col-span-1"
        to="/portfolio/img7"
      >
        <img
          class="rounded-xl hover:scale-105"
          src="../../assets/images/halloween_shoot_3.jpg"
          alt="Halloween Shoot - Hammer Man"
        />
      </NuxtLink>

      <!-- Image 8 -->
      <NuxtLink
        class="sm:col-start-4 sm:row-start-4 md:col-start-3 md:row-start-3 sm:col-span-2 md:col-span-1"
        to="/portfolio/img8"
      >
        <img
          class="rounded-xl hover:scale-105"
          src="../../assets/images/halloween_shoot_1.jpg"
          alt="Halloween Shoot - Red Riding Hood"
        />
      </NuxtLink>

      <!-- Image 9 -->
      <NuxtLink
        class="sm:col-start-3 sm:row-start-5 md:col-start-4 md:row-start-3 sm:col-span-2 md:col-span-1"
        to="/portfolio/img9"
      >
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
