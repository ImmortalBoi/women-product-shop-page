<script setup lang="ts">
import { ref } from 'vue'
import type { Contact } from '@/types'

const props = defineProps<{
  data: Contact | undefined
}>()

function splitStringInHalf(str: string): string[] {
  const middleIndex = Math.floor(str.length / 2)
  return [str.slice(0, middleIndex), str.slice(middleIndex)]
}
const text = ref(splitStringInHalf(props.data?.advertisement ?? ''))
</script>

<template>
  <div class="h-32 my-12">
    <div class="relative flex overflow-x-hidden">
      <div class="py-12 animate-marquee whitespace-nowrap">
        <span class="text-6xl ml-4">{{ text[0].toUpperCase() }}</span>
        <span class="text-6xl ml-4 font-bold">{{ text[1].toUpperCase() }}</span>
      </div>

      <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span class="text-6xl ml-4">{{ text[0].toUpperCase() }}</span>
        <span class="text-6xl ml-4 font-bold">{{ text[1].toUpperCase() }}</span>
      </div>
    </div>
  </div>
</template>
