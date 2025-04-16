<script setup lang="ts">
import telegram from '../assets/photo/telegram.svg'
import whatsapp from '../assets/photo/whatsapp.svg'
import SocialBtn from "@/components/Buttons/SocialBtn.vue";
import {getTgLink, getWALink} from "@/constants";

const socialLink = [
  {
    name: 'telegram',
    link: getTgLink('Здравствуйте. Меня интересует психологическая сессия, но есть вопрос. Подскажите, пожалуйста,'),
    icn: telegram,
    color: '#55acee',
  },
  {
    name: 'whatsapp',
    link: getWALink(),
    icn: whatsapp,
    color: '#4dc247',
  }
]
</script>

<template>
  <section class="contact_block">
    <div class="contact_background_image"></div>
    <p class="text-h4 mt-16">СДЕЛАЙ ШАГ НА ВСТРЕЧУ СЕБЕ</p>
    <div class="action_block">
      <p class="contact_title_first">Остались вопросы?</p>
      <p class="contact_title_second">Свяжитесь со мной</p>
      <div class="d-flex flex-column main-btn_block">
        <SocialBtn v-for="(social) in socialLink" :social-link="social" :key="social.name"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.contact_block
  height: 550px
  position: relative

.contact_background_image
  background-image: url('../assets/photo/contact.jpg')
  background-position: center
  filter: brightness(0.6)
  width: 100%
  height: 100%
  position: absolute
  border-radius: 8px

.action_block
  position: absolute
  top: 25%
  right: 5%

.contact_title_first
  font-size: 42px
  color: white
  margin-left: -124px
  text-transform: uppercase

.contact_title_second
  font-size: 42px
  color: white
  padding-bottom: 24px
  text-transform: uppercase

.content_img
  width: 450px

.main-btn_block
  float: right
  row-gap: 24px
</style>