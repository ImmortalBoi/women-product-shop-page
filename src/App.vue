<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroScroll from './components/HeroScroll.vue'
import AboutScroll from './components/AboutScroll.vue'
import BrandsScroll from './components/BrandsScroll.vue'
import MarqueeScroll from './components/MarqueeScroll.vue'
import FooterScroll from './components/FooterScroll.vue'
import { Head } from '@unhead/vue/components'
</script>

<template>
  <Head>
    <title>Women's Secrets</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <div class="font-league-spartan">
    <NavBar />
    <main>
      <HeroScroll />
      <AboutScroll />
      <BrandsScroll />
      <MarqueeScroll />
    </main>
    <FooterScroll />
  </div>
</template>
