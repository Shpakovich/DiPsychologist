<script setup lang="ts">
</script>

<template>
  <!-- From Uiverse.io by satyamchaudharydev -->
  <button>
    <span class="actual-text">МОИ ДИПЛОМЫ</span>
  </button>
</template>

<style scoped lang="sass">
.actual-text
  color: #8EA1D0
  font-size: 20px
  transition: all 0.5s

.actual-text:hover
  border-bottom: 1px solid #8EA1D0
  font-size: 22px

button:before
  content: ""
  position: absolute
  z-index: -1
  background: var(--color)
  height: 1px
  width: 1px
</style>