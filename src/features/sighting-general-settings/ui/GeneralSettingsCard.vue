<template>
  <EdoCard class="pa-10">
    <div class="tw-edo-document-container">
      <div class="tw-static">
        <div class="tw-title">
          Общие настройки
        </div>
        <div class="tw-subtitle">
          Редактировать
        </div>
      </div>
      <div>
        <div class="tw-info">
          <div class="tw-state">
            Статус визирования
          </div>
          <div class="tw-status">
            Активен
          </div>
        </div>
      </div>
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.tw-edo-document-container {
  @apply w-[743px] h-[96px] flex flex-col justify-start
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

.tw-info {
  @apply flex
}

.tw-state {
  @apply w-[236px] text-[#7a7a7a] mb-3.5
}

.tw-status {
  @apply font-bold mb-3.5 text-[#89cb4e]
}
</style>
