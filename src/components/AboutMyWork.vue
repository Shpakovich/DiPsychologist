<script setup lang="ts">
import line from '../assets/vector/line1.svg'

const props = defineProps<{
  aboutBlocks: Array<any>
  setHandler: any
  activeBlockIndex?: any
  modelValue: any
}>()

const emit = defineEmits(['update:modelValue'])

const dialog = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

</script>

<template>
  <div class="mb-12 position-relative">
    <p class="text-h2 main-title">
      КАК Я РАБОТАЮ
    </p>
    <img class="vector-icon" :src="line" alt="">
    <div class="d-flex justify-space-between mb-4 about-blocks">
      <div v-for="({title, img}, index) of aboutBlocks" class="d-flex flex-column block">
        <img
            :src="img"
            alt=""
            class="aboutBlock_image mb-4 rounded-lg cursor-pointer"
            @click="setHandler(index)"
        >
        <p class="work-title_mobile">{{title}}</p>
        <v-btn class="work-btn" variant="text">{{title}}</v-btn>
      </div>
    </div>
    <v-dialog
        v-model="dialog"
        width="auto"
    >
      <v-card
          class="work-popup"
          max-width="820"
          :title="aboutBlocks[activeBlockIndex].YourAddressingMe"
      >
        <template v-slot:actions>
          <v-carousel class="pop-up_carousel" height="580" :modelValue="activeBlockIndex" :cycle="false" delimiter-icon="mdi-star-four-points-small">
            <v-carousel-item v-for="(aboutBlock, index) in aboutBlocks" :key="index" >
              <component class="pop-up_content" :is="aboutBlock.textBlock" />
            </v-carousel-item>
          </v-carousel>
          <v-btn
              icon="mdi-close"
              variant="flat"
              className="close-btn"
              @click="emit('update:modelValue', false)"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
    <!-- <div v-if="activeBlockIndex !== null" class="MainText">
      <component :is="aboutBlocks[activeBlockIndex].textBlock" />
    </div> -->
  </div>
</template>

<style lang="sass">

.work-popup .v-window__left
  margin-left: -62px

.work-popup .v-window__right
  margin-right: -62px

.aboutBlock_image
  filter: brightness(80%)

.v-carousel__controls
  background: none!important
  color: #36405a!important

.block
  max-width: 31%
  column-gap: 16px
  flex: 1
  z-index: 1
  &:hover
    .aboutBlock_image
      filter: none
    .work-btn
      color: #8EA1D0!important

.vector-icon
  position: absolute
  z-index: 0
  pointer-events: none
  width: 1000px
  top: 35%
  left: 15%

.work-btn
  font-size: 18px

.work-popup
  padding: 24px 48px

.close-btn
  position: absolute
  top: 12px
  right: 12px

.main-title
  font-weight: 100!important
  margin-bottom: 32px

.work-title_mobile
  position: absolute
  padding: 32px
  top: 5%
  width: 100%
  text-align: center
  color: white
  font-size: 28px

.v-window__container::-webkit-scrollbar
  width: 0!important
</style>