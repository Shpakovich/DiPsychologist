<script setup lang="ts">
import MyDiplom from "@/components/MyDiplom.vue";
import aboutMePhoto from '../assets/photo/about_me.jpg'
import squiggle1 from '../assets/vector/squiggle1.svg'

</script>

<template>
  <div class="mb-12">
    <p class="text-h2 main-title">
      ОБО МНЕ
    </p>
    <div class="about-me_block">
      <div class="d-flex flex-column position-relative ma-auto">
        <img class="squiggle-vector" :src="squiggle1" alt="">
        <img
            :src="aboutMePhoto"
            height="540"
            width="390"
            alt="Фото Диана"
            class="rounded-lg img-about"
        >
        <MyDiplom />
      </div>
      <div class="align-content-end ma-auto">
        <p class="text-h4 mb-8" >Здравствуйте, меня зовут Диана.</p>
        <p class="text-subtitle-1 mb-8">
          С самого детства мне говорили «ты прирожденный психолог» и сейчас я подтверждаю эту веру в меня своей практикой. Мой путь в психологию не был коротким, мое первое образование техническое, что помогает мне вести консультации четко и структурированно. Далее я работала на стыке маркетинга и HR, что научило меня хорошо понимать людей и создавать комфортную атмосферу в общении.
          <br><br>
          Я помогаю людям и продолжаю непрерывно учиться, углубляю свои знания, изучаю новые методы и применяю их в своей практике. Регулярно прохожу терапии и супервизии.
          <br><br>
          Я работаю в полимодальном подходе и руководствуюсь этическим кодексом психолога, гарантирую вам конфиденциальность.
        </p>

        <img
            :src="aboutMePhoto"
            height="540"
            width="390"
            alt="Фото Диана"
            class="rounded-lg img-about_mobile"
        >

        <ul class="text-subtitle-1 mb-8">
          <li class="pb-4">Бережность и недирективность. На моих консультациях вы попадете в пространство любви и заботы.</li>
          <li class="pb-4">Честность и свобода в проявлениях. Вы без страха можете мне открыться и будете поняты и приняты.</li>
          <li class="pb-4">Высокая ценность моего и вашего времени. Моя задача помочь вам как можно быстрее, чтобы вы могли наслаждаться жизнью здесь и сейчас, а не в мечтах о будущем.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

.about-me_block
  display: flex
  flex-direction: row
  justify-content: space-between
  column-gap: 64px

.squiggle-vector
  position: absolute
  pointer-events: none
  transform: rotateX(48deg)
  width: 432px
  left: -24px
  top: -61px

.img-about
  height: fit-content
  margin-bottom: 24px

.main-title
  font-weight: 100!important

ul
  display: block
  list-style-type: '♡ '

.img-about_mobile
  height: auto
  width: 100%
  margin-bottom: 16px
</style>