<style lang="scss">
   /* Montserrat Regular */
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Montserrat Italic */
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat/static/Montserrat-Italic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* Montserrat Bold */
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Montserrat Bold Italic */
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat/static/Montserrat-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

   /* Montserrat Light */
   @font-face {
     font-family: 'Montserrat';
     src: url('../assets/fonts/Montserrat/static/Montserrat-Light.ttf') format('truetype');
     font-weight: 300;
     font-style: normal;
     font-display: swap;
   }

   /* Montserrat Light Italic */
   @font-face {
     font-family: 'Montserrat';
     src: url('../assets/fonts/Montserrat/static/Montserrat-LightItalic.ttf') format('truetype');
     font-weight: 300;
     font-style: italic;
     font-display: swap;
   }

   /* Montserrat ExtraLight */
   @font-face {
     font-family: 'Montserrat';
     src: url('../assets/fonts/Montserrat/static/Montserrat-ExtraLight.ttf') format('truetype');
     font-weight: 100;
     font-style: normal;
     font-display: swap;
   }

   /* Montserrat ExtraLight Italic */
   @font-face {
     font-family: 'Montserrat';
     src: url('../assets/fonts/Montserrat/static/Montserrat-ExtraLight.ttf') format('truetype');
     font-weight: 100;
     font-style: italic;
     font-display: swap;
   }

/* Shantell Sans Regular */
@font-face {
  font-family: 'Shantell Sans';
  src: url('../assets/fonts/Shantell_Sans/static/ShantellSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Shantell Sans Bold */
@font-face {
  font-family: 'Shantell Sans';
  src: url('../assets/fonts/Shantell_Sans/static/ShantellSans-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Shantell Sans Italic */
@font-face {
  font-family: 'Shantell Sans';
  src: url('../assets/fonts/Shantell_Sans/static/ShantellSans-Italic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* Shantell Sans Bold Italic */
@font-face {
  font-family: 'Shantell Sans';
  src: url('../assets/fonts/Shantell_Sans/static/ShantellSans-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: rgba(253,253,253,0.50);
    $font-family: "Montserrat", sans-serif;
    overflow-x: hidden!important;
  }
  .container {
    max-width: 1200px;
    margin: auto;
  }

  .v-application {
    [class*='text-'] {
      color: #36405a;
      font-family: "Montserrat", serif;
    }
    font-family: "Montserrat", serif;
  }

  p, span, a, h1, h2, h3, h4 {
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

   @media screen and (max-width: 1199.98px) {
     h2 {
       font-size: 2.5rem !important;
     }

     .header_link {
       font-size: 0.9rem!important;
     }

     .text-h2 {
       font-size: 2.5rem !important;
       position: relative!important;
       z-index: 1!important;
     }

     .about-me_block {
       flex-direction: column-reverse !important;
     }

     .img-about, .squiggle-vector {
       display: none !important;
     }

     .quote-text{
       font-size: 36px!important;
     }

     .name {
       font-size: 36px!important;
     }

     .quote-img {
       left: 0 !important;
     }

     .heart-icon{
       top: -42px!important;
       left: 412px!important;
     }

     .text-h4 {
       font-size: 1.5rem!important;
     }

     .img-about_mobile {
       max-height: 482px;
       object-fit: cover;
     }
  }

   @media screen and (min-width: 900px) {
     .mobile-header {
       display: none!important;
     }
     .main-img-mobile {
       display: none!important;
     }
     .img-about_mobile {
       display: none!important;
     }
     .work-popup {
       padding: 32px!important;
     }
   }

   @media screen and (max-width: 900px) {
     h2 {
       font-size: 2rem !important;
     }

     .img-about, .main-img {
       display: none!important;
     }

     .squiggle2-icon {
       bottom: -102px!important;
     }

     .vector-icon {
       width: 600px!important;
       top: 12px!important;
       left: -10%!important;
     }

     .about-blocks {
       flex-direction: column!important;
       row-gap: 24px!important;
     }

     .block {
       max-width: 100%!important;
       position: relative;
     }

     .work-btn {
       display: none!important;
     }

     .work-popup {
       padding: 24px;
       padding-bottom: 84px!important;
     }

     .v-carousel__controls {
       bottom: -65px !important;
     }

     .v-carousel-item {
       height: max-content!important;
     }

     .v-window__container {
       overflow-x: hidden!important;
       overflow-y: scroll!important;
     }

     .quote-img {
       top: -12px!important;
     }

     .quote-text {
       font-size: 27px!important;
     }

     .name {
       font-size: 27px!important;
     }

     .squiggle2-icon {
       width: 562px!important;
       top: -82px!important;
       right: -100px!important;
     }

     .service-card {
       flex-direction: column!important;
     }

     .service-card_content {
       width: 100%!important;
     }

     .text-h4 {
       margin-bottom: 16px!important;
     }

     .text-body-1 {
       font-size: 16px!important;
       line-height: 28px!important;
     }

     .review-block {
       width: auto!important;
       height: auto!important;
     }

     .review-text {
       height: auto!important;
     }

     .contact_title_first {
       font-size: 24px!important;
       margin-left: 12px!important;
     }

     .contact_title_second {
       font-size: 24px!important;
       padding-bottom: 52px!important;
     }

     .contact_background_image {
       background-position: left!important;
       background-size: cover!important;
     }

     .header_link {
       font-size: 24px !important;
     }
     .aboutBlock_image {
       max-height: 502px;
       object-fit: cover;
     }
   }
</style>
<template>
  <div class="container" ref="parentElement">
    <Header :header-list="headerLinks" :set-handler="setActiveBlockIndex" />
    <section class="pa-8">
      <MainInfo />
      <AboutMe id="AboutMe" />
      <AboutMyWork id="AboutWork" :about-blocks="aboutWorkBlocks" :active-block-index="activeBlockIndex" :set-handler="setActiveBlockIndex" />
      <Quote />
      <Services id="Services" />
      <Review :review-list="reviewList" id="Review" />
      <Contact />
    </section>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import YourAddressingMe from "@/components/AboutWorkBlock/YourAddressingMe.vue";
import YouWillLearn from "@/components/AboutWorkBlock/YouWillLearn.vue";
import FigureItOutTogether from "@/components/AboutWorkBlock/FigureItOutTogether.vue";
import Services from "@/components/Services.vue";
import Review from "@/components/Review.vue";
import aboutWork from '../assets/photo/about_work_1.jpg'
import aboutWorkSecond from '../assets/photo/about_work_2.jpg'
import aboutWorkThird from '../assets/photo/about_work_3.jpg'

import review1 from '../assets/review_1.jpg'
import review2 from '../assets/review_2.jpg'
import review3 from '../assets/review_3.jpg'

const parentElement = ref(null)

defineExpose({
  parentElement
})

const headerLinks = [
  {text: 'Обо мне', link: '#AboutMe'},
  {text: 'Как я работаю', link: '#AboutWork'},
  {text: 'С чем могу помочь', link: '#HowCanHelp'},
  {text: 'Услуги', link: '#Services'},
  {text: 'Отзывы', link: '#Review'},
]

const aboutWorkBlocks = [
  {
    title: 'Вы обращаетесь ко мне',
    active: false,
    img: aboutWork,
    textBlock: YourAddressingMe
  },
  {
    title: 'Мы вместе разбираемся',
    active: false,
    img: aboutWorkSecond,
    textBlock: FigureItOutTogether
  },
  {
    title: 'Вы научитесь справляться',
    active: false,
    img: aboutWorkThird,
    textBlock: YouWillLearn
  }
]

const reviewList= [{
  text: 'Диана добрый вечер. Я хотела бы еще раз вас поблагодарить за столь\n' +
      '              сильную и в то же время чуткую сессию. Вы мне помогли снизить градус значимости с моего\n' +
      '              внутреннего критика, помогли увидеть, услышать и договориться с ним. За вашим голосом хочется идти и следовать. В процессе работы я\n' +
      '              получила дополнительные инсайты. Рекомендации о которых вы мне проговаривали, записала и\n' +
      '              обязательно буду выполнять. Еще раз благодарю вас, это была великолепная\n' +
      '              сессия ❤️',
  author: 'Виктория',
  screen: review1,
},{
  text: 'Диана дорогая благодарю тебя за проведенные сессии, с тобой уютно комфортно общаться ты располагаешь к себе , ты умеешь слушать, к тебе хочется возвращаться снова и снова, прорабатывая неприятные ситуации из жизни, потому что есть результат от твоих сессий. Желаю отзывчивых добрых клиентов',
  author: 'Анастасия',
  screen: review2,
},{
  text: 'Мне понравился Ваш подход, Вас было не много, и не мало. У Вас хороший тембр голоса, нет давления.\n' +
      'Конгруэнтны. Вопросы по делу задаёте, профессионально.\n' +
      'Именно подсвечиваете,\n' +
      'сопровождаете, а не форсируете. Мне было с Вами',
  author: 'Светлана',
  screen: review3,
}]

const activeBlockIndex = ref(null);

const setActiveBlockIndex = (index)=> {
  activeBlockIndex.value = index
  console.error(activeBlockIndex.value, index)
}
</script>
