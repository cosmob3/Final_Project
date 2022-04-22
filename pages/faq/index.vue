<template>
  <div>
    <AppHero :hero-text="'FAQ'"></AppHero>
    <section class="grid grid-cols-7 gap-y-12 pt-10 pb-24">
      <div class="self-center col-start-2 col-span-2">
        <FaqCard
          :question="'What forms of payment are available?'"
          :answer="'To make things easy for you, we accept credit card, e-transfer or cheque. Yay for honeymoon point collecting!'"
        ></FaqCard>
      </div>
      <div class="self-center col-start-5 col-span-2">
        <FaqCard
          :question="'Do you do photo shoots at night?'"
          :answer="'I normally prefer to do my shoots in the morning/afternoon to utilize the natural night, but I would be open to trying some night shoots.'"
        ></FaqCard>
      </div>
      <div class="self-center col-start-2 row-start-2 col-span-2">
        <FaqCard
          :question="'How do we Save the Date?'"
          :answer="'After we meet or Facetime and go over the options that best suit your needs, a photography agreement is prepared for you to sign. I ask for a 50% retainer to save the date, with the remainder of your package is due one month before your wedding day.'"
        ></FaqCard>
      </div>
      <div class="self-center col-start-5 row-start-2 col-span-2">
        <FaqCard
          :question="'How far in advance should we book?'"
          :answer="'Since my calendar fills up quite quickly, it’s advisable to book your date as soon as you have your venue secured. This could be one year, or around 8 months before your wedding day. If your wedding is more than a year away, please let us know.'"
        ></FaqCard>
      </div>
    </section>
  </div>
</template>
