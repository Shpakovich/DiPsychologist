<script setup lang="ts">
import vector2 from "@/assets/vector/vector2.svg";

const serviceList = [{
  title: 'Установочная сессия',
  text: 'На сессии мы разберем ваш запрос, вы познакомитесь с моими методами и поймете, готовы ли идти в работу над собой. Дополнительно я дам рекомендации, которые помогут вам самостоятельно улучшить ситуацию.',
  prices: [{
    duration: 'Длительность 55-65 мин.',
    price: '1600'
  }]
},{
  title: 'Терапевтическая консультация',
  text: 'Для тех, кто настроен на глубинную работу, на изменения в своей жизни и решение трудностей.',
  prices: [{
    duration: 'Длительность 55-65 мин.',
    price: '2300'
  }, {
      duration: 'Длительность 85-95 мин.',
      price: '3200'
    }],
},{
  title: 'Психологическое сопровождение',
  text: 'Выгодное предложение для тех, кто настроен на позитивные изменения в своей жизни или нуждается в поддержке.',
  prices: [{
    duration: "Длительность 1\u00A0месяц 4\u00A0часовых консультации + поддержка в чате",
    price: '8900'
  }, {
    duration: "Длительность 1\u00A0месяц 4\u00A0полуторачасовых консультации + поддержка в чате",
    price: '12500'
  }],
}]
</script>

<template>
  <section class="position-relative services-block">
    <img class="squiggle2-icon" :src="vector2" alt="" />
    <h2 class="text-h2 mt-16 main-title">ЧТО Я ПРЕДЛАГАЮ</h2>
    <ServicesBlock :service-list-default="serviceList" />
  </section>
</template>

<style scoped lang="sass">
.squiggle2-icon
  position: absolute
  pointer-events: none
  transform: rotateX(45deg)
  top: -116px
  right: 0
.services-block
  margin-top: 164px

.main-title
  font-weight: 100!important
</style>