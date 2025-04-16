<script setup lang="ts">
import {getTgLink} from "@/constants";

const openChat = ()=> {
  window.open(getTgLink('Здравствуйте. Хочу записаться на консультацию'), '_blank')
}
</script>

<template>
  <button @click="openChat">
    <text class="btn_text">Записаться</text>
  </button>
</template>

<style scoped lang="sass">
text
  color: #8EA1D0
  font-size: 16px
  line-height: 16px
  transition: color 0.5s

button
  --color: #8EA1D0
  font-family: inherit
  display: inline-block
  width: 148px
  height: 48px
  border-radius: 8px
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

button:hover text
  color: #fff!important

button:before
  top: 100%
  left: 100%
  transition: all 0.7s

button:hover:before
  top: -30px
  left: -30px
</style>