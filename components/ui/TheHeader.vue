<template>
  <nav
    class="sm:flex sm:flex-col md:flex-row bg-orange-lo md:justify-around md:p-10"
  >
    <div class="sm:flex sm:justify-center sm:gap-x-64 sm:py-6">
      <NuxtLink to="/about"
        ><p
          class="sm:text-lg md:px-10 md:text-2xl text-center font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200"
        >
          About Me
        </p></NuxtLink
      >
      <NuxtLink to="/portfolio"
        ><p
          class="sm:text-lg md:px-10 md:text-2xl font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200"
        >
          Portfolio
        </p></NuxtLink
      >
    </div>
    <div class="grow text-center mx-24">
      <a class="flex justify-center gap-3" href="/">
        <img
          class="hover:animate-[spin_2s_linear_infinite] sm:w-2/4"
          src="~/assets/images/camera_logo.png"
          alt="Camera Shutter Icon"
        />
        <p class="sm:text-3xl md:text-5xl pt-2 font-bold">
          AshLens Photography
        </p>
      </a>
    </div>
    <div class="sm:flex sm:justify-center sm:gap-x-64 sm:py-6">
      <NuxtLink to="/contact"
        ><p
          class="sm:text-lg md:px-10 md:text-2xl font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200"
        >
          Book Today
        </p></NuxtLink
      >
      <NuxtLink to="/faq"
        ><p
          class="sm:text-lg md:px-10 md:text-2xl font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200"
        >
          FAQ
        </p></NuxtLink
      >
    </div>
  </nav>
</template>
