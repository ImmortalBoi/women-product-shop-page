<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroScroll from './components/HeroScroll.vue'
import AboutScroll from './components/AboutScroll.vue'
import BrandsScroll from './components/BrandsScroll.vue'
import MarqueeScroll from './components/MarqueeScroll.vue'
import FooterScroll from './components/FooterScroll.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
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
