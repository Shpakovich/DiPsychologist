<script setup lang="ts">
import main from '../assets/photo/main.jpg'
import vector4 from '../assets/vector/vector4.svg'
import ActionBtn from "@/components/Buttons/ActionBtn.vue";
</script>

<template>
  <div class="d-flex justify-space-between position-relative aboutMe_block">
    <div class="aboutMe_textBlock ma-auto">
      <h2 class="main-title pb-12">ПСИХОЛОГИЧЕСКИЕ СЕССИИ&nbsp;ОНЛАЙН</h2>
      <p class="text-subtitle-1 pb-6 mobile-only"> Для тех, кто готов менять свою жизнь к лучшему</p>
      <img :src='main' height="540" width="390" alt="Фото Диана" class="rounded-lg main-img-mobile">
      <p class="text-subtitle-1 pb-6 desktop-only">Для тех, кто готов менять свою жизнь к лучшему<br></p>
      <p class="text-subtitle-1 pb-12">
        Диана Шмакова, практикующий психолог<br>
        Помогаю жить счастливо и легко
      </p>
      <div class="main-btn-block">
        <ActionBtn />
      </div>
    </div>
    <img class="squiggle2-icon" :src="vector4" alt="" />
    <img :src='main' height="540" width="390" alt="Фото Диана" class="rounded-lg main-img">
  </div>
</template>

<style scoped lang="sass">
.aboutMe_textBlock
  position: relative
.main-btn-block
  display: flex
  flex-direction: row
  justify-content: flex-end
  margin-right: 42px
.main-title
  font-size: 3.75rem
  font-weight: 100
  line-height: 1
  letter-spacing: -0.0083333333em
.squiggle2-icon
  position: absolute
  pointer-events: none
  bottom: -32px
  width: 782px
  right: -112px

.main-img-mobile
  height: 350px
  width: 100%
  object-fit: cover
  object-position: center
  margin-bottom: 16px

</style>