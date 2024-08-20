<script setup lang="ts">
import DuoGen from '@/assets/Frame 120.svg'
import CarouselBase from './Brands/CarouselBase.vue'
</script>
<template>
  <div class="h-[62.813rem] bg-primary flex flex-col items-center w-full">
    <div class="h-[13.875rem] flex flex-col w-[56.5rem] mt-10">
      <img :src="DuoGen" />
      <div class="text-center text-[#737373]">
        From Ancient Times To The Present Day. Our Journey Continues To Bring The Best To The Modern
        Woman. We Draw Inspiration From Our Rich Heritage And Blend It With Contemporary Touches To
        Offer You A Diverse Range Of Products That Reflect The Elegance And Sophistication Of The
        Past With A Modern Twist.
      </div>
    </div>
    <div class="w-[94.4444%] rounded-3xl bg-background px-10 py-14 mt-10">
      <div class="text-3xl font-semibold mb-10">Duogel Product Showcase</div>
      <CarouselBase />
    </div>
  </div>
</template>
