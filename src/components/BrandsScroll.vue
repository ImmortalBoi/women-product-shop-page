<script setup lang="ts">
// import DuoGen from '@/assets/Frame 120.svg'
import CarouselBase from './Brands/CarouselBase.vue'
import { defineProps } from 'vue'
import type { Brand } from '@/types'

defineProps<{
  data: Brand | undefined
}>()
</script>
<template>
  <div class="h-[62.813rem] bg-primary flex flex-col items-center w-full max-md:h-full max-md:py-4">
    <div
      class="h-[13.875rem] flex flex-col w-[56.5rem] max-md:w-full max-md:h-full max-md:p-4 mt-10"
    >
      <img :src="data?.img" />
      <div class="text-center text-[#737373]">
        {{ data?.desc }}
      </div>
    </div>
    <div class="w-[94.4444%] rounded-3xl bg-background px-10 py-14 mt-10">
      <div class="text-3xl font-semibold mb-10">{{ data?.title }} Product Showcase</div>
      <CarouselBase :data="data?.categories" />
    </div>
  </div>
</template>
