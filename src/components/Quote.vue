<script setup lang="ts">
import quote from '../assets/quote.svg'
</script>

<template>
  <div class="position-relative mt-12 mb-12">
    <img class="quote-img" :src="quote" alt="">
    <p class="text-h3 quote-text ma-auto text-center mt-4 mb-4 shantell-sans">
      К несчастью, подавленные эмоции не&nbsp;умирают.<br>
      Их заставили замолчать. И они изнутри продолжают влиять на человека.
    </p>
    <p class="name shantell-sans text-end">Зигмунд Фрейд</p>
  </div>
</template>

<style scoped lang="sass">
.quote-img
  position: absolute
  left: 72px

.quote-text
  padding: 36px
  color: #343B4B

.name
  font-size: 32px
  color: #8EA1D0

.shantell-sans
  font-family: "Shantell Sans", serif!important
  font-optical-sizing: auto
  font-weight: 300
  font-style: normal
  font-variation-settings: "BNCE" 0, "INFM" 0, "SPAC" 0
</style>