<script setup>
import { ref } from "vue";
import "@formkit/themes/genesis";

const submitted = ref(false);
const formData = ref({});
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
};
</script>

<template>
  <div class="bg-orange-lo">
    <div class="flex justify-center">
      <!-- Beginning of Form -->
      <FormKit
        type="form"
        v-model="formData"
        :form-class="submitted ? 'hide' : 'show'"
        submit-label="Submit"
        action="https://formspree.io/f/mpzbyeyl"
        method="post"
      >
        <h2 class="text-5xl font-bold">Get in touch!</h2>
        <p class="text-3xl font-semibold py-2 text-blue-500">
          AshLens_PhotoGraphy@sample.com
        </p>
        <p class="text-3xl font-semibold py-2">
          If you have any questions, email me or fill out the form below and
          I’ll get back to you within 48 hours...
        </p>
        <hr class="pb-10" />
        <!-- Name -->
        <FormKit
          type="text"
          name="name"
          label="Full Name"
          placeholder="Jane Doe"
          help="What do people call you?"
          validation="required"
          outer-class="mb-5"
          label-class="block mb-1 font-bold text-lg"
          inner-class="max-w-xl border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
          input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
          help-class="text-xs text-gray-500"
        />
        <!-- Email -->
        <FormKit
          type="text"
          name="email"
          label="Your email"
          placeholder="jane@example.com"
          help="What email should we use?"
          validation="required|email"
          :classes="{
            outer: 'mb-5',
            label: 'block mb-1 font-bold text-sm',
            inner:
              'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
            input:
              'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
            help: 'text-xs text-gray-500',
          }"
        />
        <!-- Textarea -->
        <FormKit
          type="textarea"
          name="text"
          label="Message"
          validation="required"
          placeholder="What can I do for you"
          help="A short message letting me know what you are looking for"
          :classes="{
            outer: 'mb-5',
            inner:
              'max-w-md h-24 border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
            input:
              'w-full h-24 px-3 border-none text-base text-gray-700 placeholder-gray-400',
            label: 'block mb-1 font-bold text-sm',
            help: 'text-xs text-gray-500',
          }"
        />
      </FormKit>
    </div>
  </div>
</template>
