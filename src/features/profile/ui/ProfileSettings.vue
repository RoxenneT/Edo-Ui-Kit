<script setup>
import { profileInfo, titleInfo } from '../../profile'
</script>

<template>
  <EdoCard class="pa-10">
    <div class="tw-edo-document-container">
      <div class="tw-static">
        <div class="tw-title">
          Общая информация
        </div>
        <div class="tw-subtitle">
          Редактировать профиль
        </div>
      </div>
      <div>
        <div class="tw-render-info">
          <div class="tw-points">
            <div
              v-for="title in titleInfo"
              :key="title"
            >
              {{ title }}
            </div>
          </div>
          <div>
            <div
              v-for="item in profileInfo"
              :key="item.index"
              class="tw-info"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.tw-edo-document-container {
  @apply w-[743px] h-[272px] flex flex-col justify-start
}

.tw-static {
  @apply w-[100%] flex justify-between mb-3.5
}

.tw-title {
  @apply font-bold leading-8 text-xl
}

.tw-subtitle {
  @apply text-[#4d6dc8] hover:cursor-pointer hover:underline
}

.tw-render-info {
  @apply flex
}

.tw-points {
  @apply w-[236px] text-left
}

.tw-points > div {
  @apply text-[#7a7a7a] mb-3.5 font-medium
}

.tw-info {
  @apply font-medium mb-3.5
}
</style>
