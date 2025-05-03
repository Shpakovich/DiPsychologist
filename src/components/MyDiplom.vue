<script setup lang="ts">
import diplom from '../assets/certificates/diplom.png'
import BasePsychologicalCounseling from '../assets/certificates/Base_Psychological_Counseling.png'
import BASE_MODERN_PSYCHOSOMATICS from '../assets/certificates/BASE_MODERN_PSYCHOSOMATIC.png'
import intensiv from '../assets/certificates/intensiv.png'
import {ref} from "vue";
import BtnDiploma from "@/components/Buttons/BtnDiploma.vue";
import {useUmami} from "@/composables/useUmami";

const dialog = ref(false)

const { trackEvent } = useUmami()

const diplomOpen = () => {
  trackEvent(`Кнопка 'Мои дипломы'`)
}
</script>

<template>
  <v-dialog
      width="100%"
      max-width="850px"
      show-arrows="hover"
      v-model="dialog"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <BtnDiploma v-bind="activatorProps" @click="diplomOpen()" />
    </template>

    <template v-slot:default>
      <v-card width="100%" max-width="850px" class="ma-auto">
        <v-carousel
            class="review-carousel"
            height="auto"
            width="fit-content"
            hide-delimiters
        >
          <v-icon icon="mdi-close" color="#1F5592" class="close-button" @click="dialog = false" />
          <v-carousel-item
              :src="diplom"
          ></v-carousel-item>

          <v-carousel-item
              :src="BasePsychologicalCounseling"
          ></v-carousel-item>

          <v-carousel-item
              :src="BASE_MODERN_PSYCHOSOMATICS"
          ></v-carousel-item>

          <v-carousel-item
              :src="intensiv"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped lang="sass">

.diplom-button
  font-size: 18px

.v-dialog > .v-overlay__content
  max-width: fit-content !important

.v-overlay--active .v-overlay__scrim
  display: none

.v-overlay--active
  backdrop-filter: blur(2px)
  background: rgb(0 0 0 / 0.55)

.close-button
  z-index: 1
  position: absolute
  cursor: pointer
  right: 12px
  top: 12px
</style>