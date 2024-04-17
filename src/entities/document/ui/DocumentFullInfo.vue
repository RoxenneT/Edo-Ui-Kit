<script setup>
import { documentInfo, documentPreview } from '../../document'
</script>

<template>
  <EdoCard class="pt-10 pb-5 px-10">
    <div class="tw-edo-document-container">
      <div
        v-for="item in documentPreview"
        :key="item.id"
        class="tw-document-preview-container"
      >
        <div class="tw-go-back mb-4">
          <v-icon class="pr-2">
            mdi-arrow-u-left-top
          </v-icon>
          <p>К списку документов</p>
        </div>
        <div>
          <div class="tw-document-img">
            <v-img
              style="max-width: 72px; height: auto;"
              aspect-ratio="16/9"
              cover
              :src="item.img"
            />
          </div>
          <div class="tw-name-title pb-4">
            {{ item.documentName }}
          </div>
        </div>
      </div>
      <div class="tw-document-info">
        <div
          v-for="item in documentInfo"
          :key="item.subtitle"
          class="tw-card-content"
        >
          <div class="tw-subtitle">
            {{ item.subtitle }}
          </div>
          <div class="tw-title">
            {{ item.title }}
          </div>
          <div class="tw-title-number">
            {{ item.number }}
          </div>
          <div
            v-if="item.subtitle2"
            class="tw-subtitle2"
          >
            {{ item.subtitle2 }}
            <span>{{ item.explanation }}</span>
          </div>
        </div>
      </div>
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.tw-edo-document-container {
  @apply max-w-[823px] h-[188px] flex flex-row justify-center items-center
}

.tw-document-preview-container {
  @apply w-[148px] h-[188px] mr-2
}

.tw-go-back {
  @apply w-[100%] flex items-center cursor-pointer text-left
}

p {
  @apply w-[69px] text-[#5ca51a] text-xs
}

.tw-name-title {
  @apply font-bold leading-6 text-base
}

.tw-document-info {
  @apply w-[650px] h-[188px] flex flex-row justify-start items-start flex-wrap gap-y-10 gap-x-10
}

.tw-card-content {
  @apply  max-h-[110px] min-h-[62px]
}

.tw-subtitle {
  @apply text-[#246488] leading-4 text-xs mb-1
}

.tw-title {
  @apply font-bold leading-6 mb-1 w-[237px]
}

.tw-title-number {
  @apply font-bold leading-6 mb-1
}

.tw-subtitle2 {
  @apply leading-5 text-sm
}

span {
  @apply ml-2 text-[#7a7a7a]
}
</style>
