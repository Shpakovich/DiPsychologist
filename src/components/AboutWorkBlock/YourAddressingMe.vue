<script setup lang="ts">
import ActionBtnSecond from "@/components/Buttons/ActionBtnSecond.vue";

const points = [
  'Понять и принять себя и окружающих (в том числе партнеров и детей) и наладить контакт',
  'Перестать себя обманывать, научиться жить в ладу с собой, со своими чувствами и эмоциями',
  'Разобраться с бардаком в голове и в сердце, с внутренними противоречиями',
  'Освободиться от ограничивающих убеждений и установок и начать действовать',
  'Обуздать тревогу и страхи',
  'Отпустить обиды',
  'Выстроить границы',
  'Пережить кризисные ситуации',
]
</script>

<template>
  <div id="HowCanHelp">
    <p class="text-h4 mb-8 main-title">C чем я могу помочь</p>
    <p class="text-body-1 mb-4">
      Из любой ситуации есть выход, но находясь в эпицентре событий мы не всегда можем его разглядеть самостоятельно.<br>
    </p>
    <ul class="mb-4">
      <li v-for="(point) in points">
        <p class="text-body-2 ml-2 mb-2">{{ point }}</p>
      </li>
    </ul>
    <p class="text-body-1 mb-4">
      Все это и многое другое реально! И со мной вы в этом убедитесь
    </p>
    <ActionBtnSecond />
  </div>
</template>

<style scoped lang="sass">
#HowCanHelp p, ul
  color: #36405a
  font-family: "Montserrat", serif

ul
  display: block
  list-style-type: '♡'
  padding-left: 16px
li::marker
  color: #8EA1D0
</style>