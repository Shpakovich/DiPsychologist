<script setup lang="ts">

import ActionBtnSecond from "@/components/Buttons/ActionBtnSecond.vue";
</script>

<template>
  <div id="YouWillLearn">
    <p class="text-h4 mb-8 main-title">Результат</p>
    <p class="text-body-1 mb-8">
      Моя задача помочь вам разобраться в себе и ситуации, вырастить в психике те качества, которые позволят справляться без моей помощи.<br>
      Я не воспринимаю терапию как «пластырь», который будет с вами всю жизнь, я считаю, что нужно «вылечить рану», чтобы отпала необходимость «заклеивать ее пластырем».<br>
      <br>
      Однако успех терапии в равной степени лежит и на психологе, и на клиенте. Психолог поможет, покажет, научит, но захотите ли вы менять свою жизнь, зависит только от вас. И если вы этого захотите, я точно помогу вам это сделать!
    </p>
    <ActionBtnSecond :context="'Поп-ап: Результат'" />
  </div>
</template>

<style scoped lang="sass">
#YouWillLearn p
  color: #36405a
  font-family: "Montserrat", serif
</style>