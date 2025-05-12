<script setup lang="ts">
import ActionBtn from "@/components/Buttons/ActionBtn.vue";

const props = defineProps<{
  serviceListDefault: any
}>()


const serviceListSheets = ref([]);

onMounted(async () => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbw7DgkiOszdPsIeXx6mWkk6ryjkV070dHRVJX7_dHHYpOUH6xVuwr-4NRMDUqvM84BrMA/exec');
  serviceListSheets.value = await response.json();
});

const serviceList = computed(() => serviceListSheets.value?.length ? serviceListSheets.value : props.serviceListDefault)

</script>

<template>
  <div v-for="({id, title, text, prices}) in serviceList" :key="id" class="service-block mt-8 pt-8 pb-8 mb-8">
    <div class="service-card">
      <h3 class="service-card_title text-h4 text-uppercase font-weight-light">{{ title }}</h3>
      <div class="service-card_content">
        <p class="text-body-1 mb-8">{{ text }}</p>
        <section v-for="({price, duration}) in prices">
          <div class="d-flex flex-row justify-space-between pb-6">
            <pre class="text-body-1 duration">{{ duration }}</pre>
            <p class="text-h4 ma-auto mr-0 price">{{ price }}&#8381;</p>
          </div>
        </section>
        <div class="d-flex flex-row justify-space-between">
          <ActionBtn :context='`${title}`' />
          <p class="text-subtitle-1 online">Онлайн</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.service-block
  border-top: 1px solid #8EA1D0

.service-card
  display: flex
  flex-direction: row

.duration
  flex: 1
  min-width: 0
  word-wrap: break-word
  overflow-wrap: break-word
  white-space: normal
  padding-right: 32px
  margin: auto

.price
  flex: 0 0 66px

.online
  margin: auto 0

</style>