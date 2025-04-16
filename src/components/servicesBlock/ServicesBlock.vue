<script setup lang="ts">
import ActionBtn from "@/components/Buttons/ActionBtn.vue";

defineProps<{
  serviceList: any
}>()
</script>

<template>
  <div v-for="({title, description, prices}) in serviceList" class="service-block mt-8 pt-8 pb-8 mb-8">
    <div class="service-card">
      <h3 class="service-card_content text-h4 text-uppercase font-weight-light">{{ title }}</h3>
      <div class="service-card_content">
        <p class="text-body-1 mb-8">{{ description }}</p>
        <section v-if="prices.length === 1">
          <div class="d-flex flex-row justify-space-between pb-6">
            <pre class="text-body-1">{{ prices[0].duration }}</pre>
            <p class="text-subtitle-1">Онлайн</p>
          </div>
          <div class="d-flex flex-row justify-space-between">
            <ActionBtn />
            <p class="text-h4 ma-auto mr-0">{{ prices[0].price }}</p>
          </div>
        </section>
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

.service-card_content
  width: 50%
</style>