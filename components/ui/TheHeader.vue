<template>
  <nav class="flex bg-orange-lo justify-around p-10">
    <div class="flex">
      <NuxtLink to="/about"
        ><p
          class="px-10 text-2xl text-center font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200"
        >
          About Me
        </p></NuxtLink
      >
      <NuxtLink to="/portfolio"
        ><p
          class="px-10 text-2xl font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200"
        >
          Portfolio
        </p></NuxtLink
      >
    </div>
    <div class="grow text-center mx-24">
      <a class="flex justify-center gap-3" href="/">
        <img
          class="hover:animate-[spin_2s_linear_infinite]"
          src="~/assets/images/camera_logo.png"
          alt="Camera Shutter Icon"
        />
        <p class="text-5xl pt-2 font-bold">AshLens Photography</p>
      </a>
    </div>
    <div class="flex">
      <NuxtLink to="/contact"
        ><p
          class="px-10 text-2xl font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200"
        >
          Book Today
        </p></NuxtLink
      >
      <NuxtLink to="/faq"
        ><p
          class="px-10 text-2xl font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200"
        >
          FAQ
        </p></NuxtLink
      >
    </div>
  </nav>
</template>
