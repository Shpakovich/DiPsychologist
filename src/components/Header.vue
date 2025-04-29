<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {a} from "vite/dist/node/types.d-aGj9QkWt";
import ActionBtnSecond from "@/components/Buttons/ActionBtnSecond.vue";

const props = defineProps<{
  headerList: Array<any>
  setHandler: any
}>()

const handleClick = (link: any) => {
  changeFullScreenHeaderState()
  if (link === '#HowCanHelp') {
    setTimeout(()=> {
      const figureItOutTogetherElement = document.getElementById('AboutWork');
      figureItOutTogetherElement.scrollIntoView({block: "center", inline: "nearest"});
    })
    setTimeout(()=> props.setHandler(0), 1000)
  }
}

const isMenuOpen = ref(false)
const mobileMenu = ref(null)
const hamburger = ref(null)

const mobileMenuIcon = computed(() => {
  return isMenuOpen.value ? 'mdi-close' : 'mdi-menu'
})

const changeFullScreenHeaderState = ()=> {
  isMenuOpen.value = !isMenuOpen.value;
  mobileMenu.value.classList?.toggle('open')
}

onMounted(() => {
  hamburger.value?.addEventListener('click', ()=> changeFullScreenHeaderState())

  window.addEventListener('scroll', ()=>{
    if (isMenuOpen.value) {
      changeFullScreenHeaderState();
    }
  })
})

</script>

<template>
  <div class="d-flex justify-space-between pa-4 desktop_header">
    <div class="d-flex justify-space-around header-list">
      <a v-for="({text, link}) of headerList" :href='link' class="header_link pa-2" @click="handleClick(link)">{{ text }}</a>
    </div>
    <ActionBtnSecond />
  </div>

  <div class="mobile-header">
    <button id="hamburger" class="hamburger hamburger--elastic" ref="hamburger" type="button">
      <span class="hamburger-box">
        <v-icon :icon="mobileMenuIcon" size="36" color="#8EA1D0"/>
      </span>
    </button>
    <ActionBtnSecond class="mobile-action-btn" />


    <div class="mobile-menu" ref="mobileMenu">
      <ul class="mobile-menu-content">
        <li v-for="({text, link}) of headerList" class="is-active">
          <a :href='link' class="header_link pa-2" @click="handleClick(link)">{{ text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="sass">
// Variables
$primary: #fff
$text-color: #fff
$background-color: #664242
$menu-background: #EEEEEE
$menu-color: #8EA1D0
$menu-color-link: $menu-color
$hamburger-color: $menu-color

// Global styles
*
  outline: none
  box-sizing: border-box

html, body
  color: $text-color
  font-size: 18px
  font-family: sans-serif

a
  text-decoration: none

// Hamburger styles
#hamburger
  padding: 0
  z-index: 6
  position: absolute

.hamburger
  color: #343B4B
  &.is-active
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after
      width: 100%

  &-inner
    background-color: $hamburger-color
    width: 80%
    right: 0

    &.red, &.red::before, &.red::after
      background-color: $hamburger-color
      right: 0

    &::after
      width: 70%

    &::before, &::after
      background-color: $hamburger-color
      right: 0

// Mobile header styles
.mobile-header
  display: flex
  justify-content: flex-start
  align-items: center
  margin: 24px
  padding: 24px 0
  position: relative
  z-index: calc(3 + 2)

  &.fixed-top
    position: fixed
    top: 0
    left: 0
    width: 100%

  .logo
    height: 50px
    padding: 0 !important
    margin: 0
    margin-right: auto
    padding-left: 15px
    transition: all .35s ease-in-out
    line-height: auto
    color: $primary

    &.menu-open
      color: $menu-color !important

// Mobile menu styles
.mobile-menu
  opacity: 1
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
  background: $menu-background
  transition: all .5s ease-in-out
  color: $menu-color
  clip-path: circle(0% at top right)
  z-index: calc(3 + 1)
  display: grid
  grid-template-rows: 82px 100%

  &.open
    opacity: 1
    left: 0
    top: 0
    clip-path: circle(200% at top right)

    .mobile-menu-content li a
      opacity: 1

    footer
      opacity: 1

  &-content
    padding: 0
    margin: 0
    padding-top: 40px
    grid-column-start: 2
    grid-column-end: 2
    grid-row-start: 2
    text-align: right
    grid-row-end: 2
    width: 100%
    list-style: none
    padding-right: 24px

    li
      padding: 10px 0
      font-weight: 500
      font-size: 2em

      a
        color: $menu-color-link
        position: relative
        opacity: 0
        transition: opacity .15s ease-in-out

        &::before
          content: ''
          width: 0%
          height: 4.2px
          border-radius: 5px
          background: $menu-color-link
          position: absolute
          bottom: -5px
          right: 0
          transition: all .15s ease-in-out

        &:hover::before
          width: 60%
          opacity: .9

        &.is-active::before
          width: 100%
          opacity: 1

      &:nth-of-type(1) a
        transition-delay: .05s

      &:nth-of-type(2) a
        transition-delay: .1s

      &:nth-of-type(3) a
        transition-delay: .15s

  footer
    color: $background-color
    font-family: monospace
    position: absolute
    bottom: 35px
    left: 35px
    opacity: 0
    transition: all .15s ease-in-out

    a
      text-decoration: underline !important
      color: $background-color
      font-weight: bold

// Card styles
.card
  box-shadow: rgba(0, 0, 0, .3) 6px 7px 14px -2px
  background: white
  color: $background-color
  font-weight: bold
  border-radius: 10px

// Footer styles
#footer
  position: fixed
  bottom: 35px
  left: 50%
  transform: translateX(-50%)
  padding: 10px 15px

// Пример стиля для .header_link как в вашем примере
.header_link
  text-transform: uppercase
  text-decoration: none

.desktop_header
  display: block

.app_bar
  display: none
  padding-right: 16px

.header-list
  column-gap: 16px

.header_link
  text-transform: uppercase
  text-decoration: none
  color: #343B4B
  transition: color 0.5s

.header_link:hover
  color: #8EA1D0

.mobile-action-btn
  margin-left: auto
  position: absolute
  right: 0
  z-index: 10

@media (max-width: 900px)
  .desktop_header
    display: none!important
  .app_bar
    display: block!important
  .action-btn
    margin-right: 16px

</style>