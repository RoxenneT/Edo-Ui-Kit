<template>
  <EdoCard class="py-9 px-10">
    <div class="tw-company-container">
      <div class="tw-holder">
        <div class="tw-static">
          <div class="tw-title">
            АО "ТРАНСТЕЛЕКОМ"
          </div>
          <div class="tw-subtitle">
            980525350925
          </div>
        </div>
        <div class="tw-buttons-holder">
          <EdoButton
            color="red"
            variant="tonal"
            width="64"
            height="40"
            button-icon="mdi-delete-outline"
            icon
            rounded="lg"
            @click="onClick"
          />
          <EdoButton
            color="primary"
            rounded="lg"
            width="112"
            height="40"
            @click="onClick"
          >
            Выбрано
          </EdoButton>
        </div>
      </div>
      <div class="tw-holder">
        <div class="tw-static">
          <div class="tw-title">
            АО "ТЕСТ"
          </div>
          <div class="tw-subtitle">
            123456789021
          </div>
        </div>
        <div class="tw-buttons-holder">
          <EdoButton
            color="red"
            variant="tonal"
            width="64"
            height="40"
            button-icon="mdi-delete-outline"
            icon
            rounded="lg"
            @click="onClick"
          />
          <EdoButton
            color="primary"
            rounded="lg"
            variant="outlined"
            width="112"
            height="40"
            @click="onClick"
          >
            Выбрать
          </EdoButton>
        </div>
      </div>
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.tw-company-container {
  @apply w-[502px] h-[120px] flex flex-col
}

.tw-holder {
  @apply h-[44px] flex justify-between items-center mb-[32px]
}

.tw-static {
  @apply w-[161px] flex flex-col items-start
}

.tw-title {
  @apply font-bold leading-6
}

.tw-subtitle {
  @apply leading-5 text-sm
}

.tw-buttons-holder {
  @apply flex gap-2
}
</style>
