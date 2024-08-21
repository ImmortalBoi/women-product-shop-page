<script setup lang="ts">
import { defineProps } from 'vue'
import type { About } from '@/types'

defineProps<{
  data: About | undefined
}>()
</script>
<template>
  <div class="my-32 h-[45.25rem] max-md:h-full flex flex-row w-screen">
    <img :src="data?.img" alt="" class="w-[38rem] h-full object-contain max-md:hidden" />
    <div class="max-md:pl-8 md:mx-20 py-5">
      <div>
        <div class="font-thin text-[7.75rem] mb-10">{{ data?.title }}</div>
        <div class="text-lg">
          {{ data?.desc }}
        </div>
      </div>
      <div class="mt-8">
        <div class="font-bold text-5xl mb-6">Values</div>
        <div class="flex flex-col gap-4">
          <div
            class="h-12 bg-secondary flex items-center"
            v-for="title in data?.values"
            :key="title.id"
          >
            <span class="ml-4">{{ title.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
