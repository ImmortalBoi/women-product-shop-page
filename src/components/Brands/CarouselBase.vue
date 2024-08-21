<script setup lang="ts">
import ProductImage1 from '@/assets/folia-transferowa-silver-01.webp.svg'
import ProductImage2 from '@/assets/new-duo-sugar-lemon.webp.svg'
import ProductImage3 from '@/assets/new-duo-gabki-do-ombre.webp.svg'
import ProductImage4 from '@/assets/paint-gel-5g-063-barbie.webp.svg'
import CarouselCard from './CarouselCard.vue'
import { ref, computed } from 'vue'
import { defineProps } from 'vue'
import type { BrandCategory } from '@/types'
// import BrandsScroll from '../BrandsScroll.vue'

defineProps<{
  data: BrandCategory[] | undefined
}>()

const externalCarousel = ref<HTMLInputElement | null>(null)
const internalCarousel = ref<HTMLInputElement | null>(null)
const innerTranslation = ref(0)
const selectedCategory = ref(0)
const carouselDummyData = [
  { name: 'Folia Transferowa Silver 01', productImage: ProductImage1 },
  { name: 'New duo sugar lemon', productImage: ProductImage2 },
  { name: 'New duo gabki do ombre', productImage: ProductImage3 },
  { name: 'Paint gel 5g 063 Barbie', productImage: ProductImage4 },
  { name: 'New duo gabki do ombre', productImage: ProductImage3 },
  { name: 'New duo sugar lemon', productImage: ProductImage2 },
  { name: 'Folia Transferowa Silver 01', productImage: ProductImage1 },
  { name: 'Paint gel 5g 063 Barbie', productImage: ProductImage4 }
]

// const carouselCategoryData = [
//   'Devices',
//   'UV Gel Nail Polishes',
//   'Nail art',
//   'Accessories',
//   'UV Gels',
//   'Liquid / Preparations',
//   'Care',
//   'Disinfection / Hygiene',
//   'Acrylics',
//   'Outlet',
//   'Collection'
// ]

const translationStyle = computed(() => {
  return {
    transform: `translateX(-${innerTranslation.value}px)`
  }
})
const isLeftDisabled = computed(() => innerTranslation.value === 0)
const isRightDisabled = computed(() => {
  const innerLength = internalCarousel.value?.scrollWidth
  const externalLength = externalCarousel.value?.offsetWidth
  return innerTranslation.value + (externalLength ?? 0) >= (innerLength ?? 0)
})

const moveLeft = () => {
  if (!isLeftDisabled.value) {
    const maxMove = externalCarousel.value?.offsetWidth ?? 0
    innerTranslation.value = innerTranslation.value - maxMove
    if (innerTranslation.value <= 50) {
      innerTranslation.value = 0
    }
  }
}

const moveRight = () => {
  if (!isRightDisabled.value) {
    const innerLength = internalCarousel.value?.scrollWidth ?? 0
    const externalLength = externalCarousel.value?.offsetWidth ?? 0
    const remainingSpace = innerLength - (innerTranslation.value + 2 * externalLength)
    console.log(remainingSpace)

    if (remainingSpace <= 150) {
      innerTranslation.value += remainingSpace + externalLength
    } else {
      innerTranslation.value += externalLength
    }
  }
}
</script>
<template>
  <!-- Category -->
  <div class="flex flex-row gap-7 items-center mb-8 overflow-x-scroll">
    <button
      v-for="category in data"
      :class="category.id == selectedCategory ? 'bg-primary px-4 py-2 rounded-3xl' : 'opacity-30'"
      :key="category.id"
      @click="selectedCategory = category.id"
    >
      {{ category.title }}
    </button>
  </div>
  <!-- Carousel Start-->
  <div
    class="overflow-x-scroll md:overflow-hidden whitespace-nowrap"
    id="external-carousel"
    ref="externalCarousel"
  >
    <div
      class="flex flex-row gap-6 mb-5 transition ease-out duration-600"
      id="internal-carousel"
      ref="internalCarousel"
      :style="translationStyle"
    >
      <CarouselCard
        v-for="(carouselCard, index) in carouselDummyData"
        :key="index"
        :name="carouselCard.name"
        :product-image="carouselCard.productImage"
      />
    </div>
  </div>

  <!-- Carousel Buttons-->
  <div class="flex flex-row gap-3 max-md:hidden">
    <button
      class="rounded-full bg-[#83B7D7] disabled:bg-[#D9D9D9]"
      @click="moveLeft"
      :disabled="isLeftDisabled"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="rotate-90 size-10 p-3 fill-white"
      >
        <path
          d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
        />
      </svg>
    </button>
    <button
      class="rounded-full bg-[#83B7D7] disabled:bg-[#D9D9D9]"
      @click="moveRight"
      :disabled="isRightDisabled"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="-rotate-90 size-10 p-3 fill-white"
      >
        <path
          d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
        />
      </svg>
    </button>
  </div>
  <!-- Carousel End -->
</template>
