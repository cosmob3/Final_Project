<template>
  <div>
    <AppHero :hero-text="'FAQ'"></AppHero>
    <section class="grid sm:grid-cols-5 md:grid-cols-7 gap-y-12 pt-10 pb-24">
      <div
        class="self-center sm:col-start-2 md:col-start-2 sm:col-span-3 md:col-span-2"
      >
        <FaqCard
          :question="'What forms of payment are available?'"
          :answer="'To make things easy for you, we accept credit card, e-transfer or cheque.'"
        ></FaqCard>
      </div>
      <!-- <div class="md:col-start-5 md:col-span-2">
        <img
          src="https://a.storyblok.com/f/154289/5616x3744/bd24ee5410/flowers-n-heels.jpg/m/600x200/smart"
          alt="wedding image"
        />
      </div> -->
      <div
        class="self-center md:col-start-5 sm:col-start-2 sm:row-start-2 sm:col-span-3 md:col-span-2"
      >
        <FaqCard
          :question="'Do you do photo shoots at night?'"
          :answer="'I normally prefer to do my shoots in the morning/afternoon to utilize the natural night, but I would be open to trying some night shoots.'"
        ></FaqCard>
      </div>
      <div
        class="self-center sm:col-start-2 md:col-start-2 row-start-2 sm:row-start-3 sm:col-span-3 md:col-span-2"
      >
        <FaqCard
          :question="'How do we Save the Date?'"
          :answer="'After we meet or Facetime and go over the options that best suit your needs, a photography agreement is prepared for you to sign. I ask for a 50% retainer to save the date, with the remainder of your package is due one month before your wedding day.'"
        ></FaqCard>
      </div>
      <div
        class="self-center sm:col-start-2 md:col-start-5 row-start-2 sm:row-start-4 sm:col-span-3 md:col-span-2"
      >
        <FaqCard
          :question="'How far in advance should we book?'"
          :answer="'Since my calendar fills up quite quickly, it’s advisable to book your date as soon as you have your venue secured. This could be one year, or around 8 months before your wedding day. If your wedding is more than a year away, please let us know.'"
        ></FaqCard>
      </div>
    </section>
  </div>
</template>
