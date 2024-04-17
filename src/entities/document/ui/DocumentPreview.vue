<script setup>
const documentPreview = [
  {
    id: 1,
    total: 31,
    img: '/sell.svg',
    icon: 'mdi-clock-outline',
    documentName: 'Реализация товаров и услуг',
  },
]
</script>

<template>
  <EdoCard enable-hover>
    <div
      v-for="item in documentPreview"
      :key="item.id"
      class="py-6 px-5 tw-document-preview-container"
    >
      <div class="tw-subtitle pb-2">
        Всего {{ item.total }} документов
      </div>
      <div class="tw-document-img mb-2">
        <v-img
          style="max-width: 79px; height: auto;"
          aspect-ratio="16/9"
          cover
          :src="item.img"
        />
      </div>
      <div class="tw-title pb-4">
        {{ item.documentName }}
      </div>
      <div class="tw-total-info">
        <v-icon
          class="mr-2"
          color="primary"
        >
          {{ item.icon }}
        </v-icon>
        <div class="tw-total-text-info">
          <div class="tw-total-text-subtitle">
            Ожидает подписи
          </div>
          <div class="tw-total-text-title">
            {{ item.total }} документов
          </div>
        </div>
      </div>
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.tw-document-preview-container {
  @apply w-[218px] h-[259px]
}

.tw-subtitle {
  @apply text-center leading-3 text-xs/[10px]
}

.tw-document-img {
  @apply flex justify-center
}

.tw-title {
  @apply font-bold leading-6 text-xl min-h-[50px] max-h-[186px]
}

.tw-total-info {
  @apply flex items-center
}

.tw-total-text-subtitle {
  @apply text-[#7a7a7a] leading-4 text-xs
}

.tw-total-text-title {
  @apply font-bold leading-5 text-lg
}
</style>
