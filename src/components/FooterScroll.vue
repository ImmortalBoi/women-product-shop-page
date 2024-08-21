<script setup lang="ts">
import Twitter from '@/assets/twitter.svg'
import Facebook from '@/assets/instagram.svg'
import Instagram from '@/assets/facebook.svg'
import type { Footer } from '@/types'
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'

defineProps<{
  data: Footer | undefined
}>()

const email = ref('')
const message = ref('')
const subscriptionStatus = ref(false)

const submitForm = async () => {
  const { response: res } = await useFetch(
    'https://api-woman-secrets.spider-te8.com/api/subscribers'
  ).post({
    email: email.value
  })
  if (res.value?.redirected == false) {
    console.log('New User')
    const result = await res.value.json()
    message.value = result['message']
    subscriptionStatus.value = true
  } else {
    message.value = 'You are already subscribed'
    subscriptionStatus.value = false
  }
}
</script>
<template>
  <footer class="h-80 max-md:h-full bg-primary flex flex-col justify-between">
    <div
      class="h-52 max-md:h-full py-6 px-12 gap-8 md:gap-32 flex flex-row items-center max-md:flex-col"
    >
      <div class="flex flex-row gap-8 items-start mt-3">
        <div class="flex flex-col">
          <div class="font-medium text-2xl mb-6">Informations</div>
          <div>Home</div>
          <div>About us</div>
          <div>Our Service</div>
          <div>Our Product</div>
        </div>
        <div class="flex flex-col">
          <div class="font-medium text-2xl mb-6">Support</div>
          <div>FAQs</div>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      <div class="flex-shrink-0 max-md:hidden">
        <img :src="data?.logo" alt="Woman's Secrets" class="w-52 h-auto object-contain" />
      </div>
      <div class="flex flex-row gap-8 w-full max-md:flex-col">
        <div class="flex flex-col">
          <div class="font-medium text-2xl mb-6">Contacts</div>
          <div>{{ data?.phone }}</div>
          <div>support@womansecrets.com</div>
          <div class="flex flex-row items-center gap-5 p-5">
            <a :href="data?.socials.twitter">
              <img :src="Twitter" alt="globe" class="size-5" />
            </a>
            <a :href="data?.socials.instagram">
              <img :src="Instagram" alt="globe" class="size-5" />
            </a>
            <a :href="data?.socials.facebook">
              <img :src="Facebook" alt="globe" class="size-5" />
            </a>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="font-medium text-2xl mb-6">Subscribe For More</div>
          <input
            v-model="email"
            class="bg-white rounded-3xl px-2 py-2 w-full"
            placeholder="Enter your mail"
          />
          <div class="flex flex-row items-center">
            <button
              @click="submitForm"
              class="px-2 py-2 mt-3 rounded-2xl self-start bg-background hover:bg-slate-100"
            >
              Send
            </button>
            <span
              v-if="message !== ''"
              class="p-2"
              :class="subscriptionStatus ? 'text-green-600' : 'text-red-700'"
              >{{ message }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row-reverse items-center border-t-[#C2C2D6] border self-end w-full h-16 justify-self-end"
    >
      <div class="px-12">2010 © All rights reserved</div>
    </div>
  </footer>
</template>
