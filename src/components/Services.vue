<script setup lang="ts">
import vector2 from "@/assets/vector/vector2.svg";

const serviceList = [{
  title: 'Установочная сессия',
  description: 'На сессии мы разберем ваш запрос, вы познакомитесь с моими методами и поймете, готовы ли идти в работу нас собой. Дополнительно я дам рекомендации, которые помогут вам самостоятельно улучшить ситуацию.',
  prices: [{
    duration: 'Длительность 50-60 мин.',
    price: '1600 руб'
  }]
},{
  title: 'Терапевтическая консультация',
  description: 'Для тех, кто настроен на более глубинную работу, на изменения в своей жизни и решение трудностей.',
  prices: [{
    duration: 'Длительность 50-60 мин',
    price: '2200 руб'
  }],
},{
  title: 'Психологическое сопровождение',
  description: 'Выгодное педложение для тех, кто настроен на позитивные изменения в своей жизни или нуждается в поддержке.',
  prices: [{
    duration: "Длительность 1 месяц\n4 консультации + поддержка в чате",
    price: '8900 руб'
  }],
}]
</script>

<template>
  <section class="position-relative services-block">
    <img class="squiggle2-icon" :src="vector2" alt="" />
    <h2 class="text-h2 mt-16 main-title">ЧТО Я ПРЕДЛАГАЮ</h2>
    <ServicesBlock :service-list="serviceList" />
  </section>
</template>

<style scoped lang="sass">
.squiggle2-icon
  position: absolute
  transform: rotateX(45deg)
  top: -116px
  right: 0
.services-block
  margin-top: 164px

.main-title
  font-weight: 100!important
</style>