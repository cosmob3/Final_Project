<template>
  <div class="bg-orange-lo">
    <section>
      <AppHero :hero-text="'Portfolio'"></AppHero>
    </section>
    <h2 class="text-center text-5xl p-20">Some of my favourites...</h2>
    <div class="grid gap-4 grid-cols-5">
      <img
        class="rounded-xl col-start-2 col-span-1"
        src="../../assets/images/D&N71.jpg"
        alt="Graduation Sample Image 1"
      />
      <img
        class="rounded-xl col-span-1"
        src="../../assets/images/D&N6.jpg"
        alt="Graduation Sample Image 2"
      />
      <img
        class="rounded-xl col-span-1"
        src="../../assets/images/D&N66.jpg"
        alt="Graduation Sample Image 3"
      />
      <img
        class="rounded-xl col-start-2 row-start-2"
        src="~/assets/images/oso_w_backlight.jpg"
        alt="Dog with backlight"
      />
      <img
        class="rounded-xl col-start-3 row-start-2"
        src="~/assets/images/Sunflower.jpg"
        alt="Full colour sunflower with black and white background"
      />
      <img
        class="rounded-xl col-start-4 row-start-2"
        src="~/assets/images/oso_w_sunflower.jpg"
        alt="Dog next to sunflower"
      />
      <img
        class="rounded-xl col-start-2 row-start-3"
        src="../../assets/images/halloween_shoot_3.jpg"
        alt="Halloween Shoot - Hammer Man"
      />
      <img
        class="rounded-xl col-start-3 row-start-3"
        src="../../assets/images/halloween_shoot_1.jpg"
        alt="Halloween Shoot - Red Riding Hood"
      />
      <img
        class="rounded-xl col-start-4 row-start-3"
        src="~/assets/images/halloween_shoot_2.jpg"
        alt="Halloween Shoot - Decapitated Wolf"
      />
    </div>
  </div>
</template>

<script setup>
transition: "page";
</script>
