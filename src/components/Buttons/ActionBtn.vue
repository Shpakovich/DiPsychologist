<script setup lang="ts">
import {getTgLink} from "@/constants";

const openChat = ()=> {
  window.open(getTgLink('Здравствуйте. Хочу записаться на консультацию'), '_blank')
}
</script>

<template>
  <div class="d-flex main-btn justify-space-around" @click="openChat">
    <p class="main-btn-text text-h4 ma-auto">Записаться</p>
    <button>
      <v-icon icon="mdi-arrow-right-thin" size="24"/>
    </button>
  </div>
</template>

<style scoped lang="sass">
.main-btn
  column-gap: 18px
  max-width: fit-content
  cursor: pointer
.main-btn-text
  transition: color 0.5s
  color: #8EA1D0!important
  font-size: 2.125rem
  font-weight: 300

button
  font-weight: 500
  color: var(--color)

.main-btn:hover .main-btn-text
  color: #343B4B!important

button
  --color: #8EA1D0
  font-family: inherit
  display: inline-block
  width: 48px
  height: 48px
  border-radius: 24px
  line-height: 2.5em
  position: relative
  overflow: hidden
  border: 1.5px solid var(--color)
  transition: color 0.5s
  z-index: 1
  font-size: 17px

button:before 
  content: ""
  position: absolute
  z-index: -1
  background: var(--color)
  height: 150px
  width: 200px
  border-radius: 50%

.main-btn:hover button
  color: #fff

button:before
  top: 100%
  left: 100%
  transition: all 0.7s

.main-btn:hover button:before
  top: -30px
  left: -30px

</style>