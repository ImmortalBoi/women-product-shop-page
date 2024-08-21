<script setup lang="ts">
import Img from '@/assets/image 44.svg'
</script>
<template>
  <div class="my-32 h-[45.25rem] max-md:h-full flex flex-row w-full">
    <img :src="Img" alt="" class="w-[38rem] h-full object-contain max-md:hidden" />
    <div class="max-md:px-8 md:mx-20 py-5">
      <div>
        <div class="font-thin text-[7.75rem] mb-10">ABOUT US</div>
        <div class="text-lg">
          From ancient times to the present day. Our journey continues to bring the best to the
          Modern woman. We draw inspiration from our rich heritage and blend it with contemporary
          touches to offer you a diverse range of products that reflect the elegance and
          sophistaction of the past with a modern twist.
        </div>
      </div>
      <div class="mt-8">
        <div class="font-bold text-5xl mb-6">Values</div>
        <div class="flex flex-col gap-4">
          <div class="h-12 bg-secondary flex items-center">
            <span class="ml-4">Sustainability</span>
          </div>
          <div class="h-12 bg-secondary flex items-center">
            <span class="ml-4">Women's Empowerment</span>
          </div>
          <div class="h-12 bg-secondary flex items-center">
            <span class="ml-4">Innovation and Creativity</span>
          </div>
          <div class="h-12 bg-secondary flex items-center">
            <span class="ml-4">Excellent Customer Service</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
