<script setup lang="ts">
import heart from '../assets/vector/heart.svg'
import img from '../assets/photo/img.svg'

defineProps<{
  reviewList: any
}>()

</script>

<template>
  <section class="position-relative">
    <img class="heart-icon" :src="heart" alt="">
    <h2 class="text-h2 mt-16 mb-8 main-title">ОТЗЫВЫ КЛИЕНТОВ</h2>
    <v-carousel
        height="auto"
        class="review-carousel"
        hide-delimiters
    >
      <v-carousel-item v-for="(reviewList, index) in reviewList" :key="index">
        <div v-if="reviewList.text" class="review-block">
          <div class="review-text">
            <p>{{ reviewList.text }}</p>
            <div class="d-flex flex-row justify-space-between">
              <p>{{ reviewList.author }}</p>
              <v-dialog class="review-dialog" width="100%" max-width="632">
                <template v-slot:activator="{ props: activatorProps }">
                  <img v-bind="activatorProps" :src="img" alt="">
                </template>
                <template v-slot:default="{ isActive }">
                  <img :src="reviewList.screen" alt="" class="review-img" />
                </template>
              </v-dialog>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<style scoped lang="sass">
.review-carousel
  margin: auto
  border-radius: 12px
  max-width: 648px
  width: auto

.heart-icon
  position: absolute
  z-index: 1
  top: 78px
  right: 284px

.review-block
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  width: fit-content
  padding: 12px 0
  margin: auto

.review-img
   border-radius: 25px

.review-text
  width: 480px
  height: 400px
  position: relative
  display: flex
  flex-direction: column
  justify-content: space-between
  background-color: #ebebeb
  border-radius: 7px
  padding: 16px 20px 16px 27px

.review-text p:first-child
  color: #333333
  font-size: 18px
  font-style: italic
  line-height: 24px
  text-align: left
  margin: 0

.review-text p
  color: #989898
  font-size: 14px
  font-weight: 400
  line-height: 18px
  text-align: left
  margin: 0
  padding: 5px 0 6px 0

.main-title
  font-weight: 100!important
</style>