<script setup>
  const sightingState = [
    'Произвольные документы исходящие',
    'Договоры исходящие',
    'Произвольные документы исходящие',
    'Произвольные документы входящие',
    'Произвольные документы входящие',
    'Произвольные документы входящие',
    'Договоры входящие',
    'Реализация товаров услуг',
    'Произвольные документы исходящие',
    'Произвольные документы входящие',
    'Произвольные документы исходящие',
    'Произвольные документы исходящие',
  ];
  const documentTitle = [
    'Исходящий документ 1', 
    'Договор исходящий', 
    'Тест док 2', 
    'Документ выходящий', 
    'Документ выходящий',
    'Документ выходящий',
    'Тест перенос маршр',
    'Тест перенос',
    'Отправка документа',
    'Входящий документ',
    'Исходящий документ',
    'EDO-294 док исх'
  ];
</script>

<template>
  <EdoCard class="pa-10">
    <div class="tw-edo-document-container">
      <div class="tw-static">
        <div class="tw-title">Маршруты визирования</div>
        <div class="tw-subtitle">
          <div class="tw-add">
            <v-icon color="success">mdi-arrow-right-thin</v-icon>
            Добавить
          </div>
          <div class="tw-edit">
            <v-icon color="success">mdi-pencil</v-icon>
            Редактировать
          </div>
        </div>
      </div>
      <div>
        <div class="tw-render-info">
          <div class="tw-points">
            <div v-for="title in documentTitle" :key="title">
              {{ title }}
            </div>
          </div>
          <div>
            <div class="tw-info" v-for="item in sightingState" :key="item.index">
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
  @apply w-[743px] h-fit flex flex-col justify-start
}

.tw-static {
  @apply w-[100%] flex justify-between mb-3.5
}

.tw-title {
  @apply font-bold leading-8 text-xl
}

.tw-subtitle {
  @apply text-[#4d6dc8] flex w-[260px] justify-between
}

.tw-add, .tw-edit {
  @apply hover:cursor-pointer hover:underline
}

.tw-render-info {
  @apply flex
}

.tw-points {
  @apply w-[236px]
}

.tw-points > div {
  @apply text-[#7a7a7a] mb-3.5
}
     
.tw-info {
  @apply font-medium mb-3.5
}
</style>