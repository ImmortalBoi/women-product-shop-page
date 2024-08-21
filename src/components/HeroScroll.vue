<script setup lang="ts">
import leftImg from '@/assets/image 26.svg'
import rightImg from '@/assets/image 25.svg'
</script>
<template>
  <div
    class="md:h-[47.5rem] w-screen flex flex-row max-md:flex-col max-md:justify-center max-md:items-center"
  >
    <div class="md:w-1/3 h-full">
      <img :src="leftImg" alt="" class="w-full h-full object-cover" />
    </div>
    <div class="w-1/3 h-full flex items-center justify-center flex-col px-8 max-md:py-8">
      <div class="text-[2.5rem] text-center font-medium">
        Enhancing everything related to women's charm and alure is our mission.
      </div>
      <button class="rounded-3xl bg-primary w-40 mt-6 h-12 hover:bg-slate-200">Contact us</button>
    </div>
    <div class="md:w-1/3 h-full">
      <img :src="rightImg" alt="" class="w-full h-full object-cover" />
    </div>
  </div>
</template>
