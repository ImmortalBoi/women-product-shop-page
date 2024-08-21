<script setup lang="ts">
import Logo from '@/assets/Logo.svg'
import Globe from '@/assets/globe-svgrepo-com.svg'
import ArrowDown from '@/assets/angle-down-solid.svg'
import Twitter from '@/assets/twitter.svg'
import Facebook from '@/assets/instagram.svg'
import Instagram from '@/assets/facebook.svg'
import BurgerMenu from '@/assets/burger-menu-left-svgrepo-com.svg'
import { ref } from 'vue'

const navToggle = ref(false)
</script>
<template>
  <nav
    class="sticky top-0 inset-10 bg-background flex flex-col w-screen gap-7 border-solid border border-b-[#C2C2D6] z-50"
    :class="navToggle == true ? 'h-44' : 'h-28 md:h-44'"
  >
    <!-- First Row w/Logo & Language setting-->
    <div class="flex flex-row justify-between px-4 lg:px-12 mt-6 items-center">
      <button @click="navToggle = !navToggle" class="md:hidden rounded-2xl bg-primary p-2">
        <img :src="BurgerMenu" alt="" class="size-5" />
      </button>
      <!-- Logo -->
      <img :src="Logo" alt="Woman's Secrets" class="" />

      <!-- Language -->
      <div class="flex flex-row items-center">
        <img :src="Globe" alt="globe" class="size-6 max-md:size-4" />
        <span class="max-md:hidden mx-1">English</span>
        <img :src="ArrowDown" alt="Arrow Down" class="mx-1 size-6 max-md:size-4" />
      </div>
    </div>

    <!-- Second Row w/Links & Social Media-->
    <div
      class="flex flex-row justify-between h-10 px-12 py-3 items-center"
      :class="navToggle == true ? '' : 'max-md:hidden'"
    >
      <!-- Links -->
      <div class="flex flex-row gap-6 items-center">
        <button class="hover:underline">Home</button>
        <button class="hover:underline">About us</button>
        <button class="hover:underline">Our Service</button>
        <button class="hover:underline">Partner Brands</button>
        <button class="hover:underline">Contact Us</button>
      </div>

      <!-- Social Media -->
      <div class="flex flex-row items-center gap-3 mr-5">
        <button>
          <img :src="Twitter" alt="globe" class="size-5" />
        </button>
        <button>
          <img :src="Instagram" alt="globe" class="size-5" />
        </button>
        <button>
          <img :src="Facebook" alt="globe" class="size-5" />
        </button>
      </div>
    </div>
  </nav>
</template>
