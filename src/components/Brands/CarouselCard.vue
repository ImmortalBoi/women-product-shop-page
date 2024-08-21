<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  name: String,
  productImage: String
})
</script>
<template>
  <div
    class="md:min-w-[23.5%] h-[51.3%] max-md:w-96 bg-secondary flex rounded-2xl flex-col items-center justify-center p-6"
  >
    <img :src="props.productImage" alt="" class="size-64 object-fill" />
    <div class="font-normal text-lg">{{ props.name }}</div>
  </div>
</template>
