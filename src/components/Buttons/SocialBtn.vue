<script setup lang="ts">
import {useUmami} from "@/composables/useUmami";

defineProps<{
  socialLink: any
}>()

const { trackEvent } = useUmami()

const openLink = (socialLink)=> {
  trackEvent(
      `Кнопка 'записаться'`,
      { context: `Остались вопросы: ${socialLink.name}` }
  )
  window.open(socialLink.link, '_blank')
}

</script>

<template>
  <button :class="['main-btn_block', socialLink.name]" :style="{'--color': socialLink.color}" @click="openLink(socialLink)">
    <text class="ma-auto tg-text">{{socialLink.name}}</text>
    <img :src="socialLink.icn" alt="" class="contact-icon" />
  </button>
</template>

<style scoped lang="sass">
text
  font-size: 18px
  line-height: 18px
  transition: color 0.5s

button
  //--color: #55acee
  display: flex
  cursor: pointer
  flex-direction: row
  padding: 12px 32px
  border-radius: 50px
  width: fit-content

  font-family: inherit
  line-height: 2.5em
  position: relative
  overflow: hidden
  border: 1.5px solid #EEEEEE
  transition: all 0.5s
  z-index: 1
  font-size: 17px

button:before
  content: ""
  position: absolute
  z-index: -1
  background: var(--color)
  height: 150px
  width: 235px
  border-radius: 50%

button:hover text
  color: #fff!important

button:hover
  border-color: var(--color)

button:before
  top: 100%
  left: 100%
  transition: all 0.7s

button:hover:before
  top: -30px
  left: -15px

.tg-text
  color: #EEEEEE
  text-transform: uppercase

.contact-icon
  width: 24px
  height: 24px
  margin: auto auto auto 8px
</style>