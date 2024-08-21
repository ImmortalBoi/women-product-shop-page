<script setup lang="ts">
import leftImg from '@/assets/image 26.svg'
import rightImg from '@/assets/image 25.svg'
import { defineProps } from 'vue'
import type { Header } from '@/types'

const props = defineProps<{
  data: Header | undefined
}>()
</script>
<template>
  <div
    class="lg:h-[47.5rem] w-screen flex flex-row max-lg:flex-col max-lg:justify-center max-lg:items-center"
  >
    <div class="lg:w-1/3 h-full">
      <video
        :src="data?.video"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
      ></video>
    </div>
    <div class="w-1/3 h-full flex items-center justify-center flex-col px-8 max-lg:py-8">
      <div class="text-[2.5rem] text-center font-medium">
        {{ data?.desc }}
      </div>
      <a
        :href="data?.btn_link"
        class="rounded-3xl bg-primary w-40 mt-6 h-12 hover:bg-slate-200 hover:cursor-pointer flex items-center justify-center"
        ><span class="align-middle">{{ data?.btn_text }}</span></a
      >
    </div>
    <div class="lg:w-1/3 h-full">
      <img :src="data?.img" alt="" class="w-full h-full object-cover" />
    </div>
  </div>
</template>
