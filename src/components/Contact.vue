<script setup lang="ts">
import telegram from '../assets/photo/telegram.svg'
import whatsapp from '../assets/photo/whatsapp.svg'
import instagram from '../assets/photo/instagram.svg'
import SocialBtn from "@/components/Buttons/SocialBtn.vue";
import {getInstLink, getTgLink, getWALink} from "@/constants";

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
  },
  {
    name: 'instagram',
    link: getInstLink(),
    icn: instagram,
    color: '#e1306c',
  }
]
</script>

<template>
  <section class="contact_block" id="Contacts">
    <p class="contact-title mobile-only">Остались вопросы?</p>
    <div class="contact_background_image"></div>
    <!-- <p class="text-h4 mt-16">СДЕЛАЙ ШАГ НА ВСТРЕЧУ СЕБЕ</p> -->
    <div class="action_block">
      <p class="contact_title_first desktop-only">Остались вопросы?</p>
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
  @media screen and (max-width: 900px)
    height: 630px

.contact_background_image
  background-image: url('../assets/photo/contact.jpg')
  background-position: center
  filter: brightness(0.6)
  width: 100%
  height: 100%
  max-height: 550px
  position: absolute
  border-radius: 8px

.action_block
  position: absolute
  top: 20%
  right: 5%

  @media screen and (max-width: 900px)
    bottom: 5%
    left: 5%
    top: auto
    right: auto


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

  @media screen and (max-width: 900px)
    font-size: 24px
    padding-bottom: 36px

.content_img
  width: 450px

.main-btn_block
  float: right
  row-gap: 24px

  @media screen and (max-width: 900px)
    float: left

.contact-title
  font-size: 32px
  font-weight: lighter
  margin-bottom: 32px
  margin-top: 64px
</style>