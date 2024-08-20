<script setup lang="ts">
import Logo from '@/assets/Logo.svg'
import Twitter from '@/assets/twitter.svg'
import Facebook from '@/assets/instagram.svg'
import Instagram from '@/assets/facebook.svg'
</script>
<template>
  <footer class="h-80 bg-primary flex flex-col justify-between">
    <div class="h-52 py-6 px-12 gap-32 flex flex-row items-center">
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
      <div class="flex-shrink-0">
        <img :src="Logo" alt="Woman's Secrets" class="w-52 h-auto object-contain" />
      </div>
      <div class="flex flex-row gap-8 w-full">
        <div class="flex flex-col">
          <div class="font-medium text-2xl mb-6">Contacts</div>
          <div>00966 444 673 56</div>
          <div>support@womansecrets.com</div>
          <div class="flex flex-row items-center gap-5 p-5">
            <img :src="Twitter" alt="globe" class="size-5" />
            <img :src="Instagram" alt="globe" class="size-5" />
            <img :src="Facebook" alt="globe" class="size-5" />
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="font-medium text-2xl mb-6">Subscribe For More</div>
          <input class="bg-white rounded-3xl px-2 py-2 w-full" placeholder="Enter your mail" />
          <button class="px-2 py-2 mt-3 rounded-2xl self-start bg-background hover:bg-slate-100">
            Send
          </button>
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
