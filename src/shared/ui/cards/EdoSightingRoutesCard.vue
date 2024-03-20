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
    <div class="edo-document-container">
      <div class="static">
        <div class="title">Маршруты визирования</div>
        <div class="subtitle">
          <div class="add">
            <v-icon color="success">mdi-arrow-right-thin</v-icon>
            Добавить
          </div>
          <div class="edit">
            <v-icon color="success">mdi-pencil</v-icon>
            Редактировать
          </div>
        </div>
      </div>
      <div>
        <div class="render-info">
          <div class="points">
            <div v-for="title in documentTitle" :key="title">
              {{ title }}
            </div>
          </div>
          <div class="info">
            <div v-for="item in sightingState" :key="item.index">
              {{ item }}
            </div>
          </div> 
        </div>
      </div>
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.edo-document-container {
  width: 743px;
  height: 536px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .static {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .title {
      font-weight: bold;
      line-height: 32px;
      font-size: 20px;
    }
    .subtitle {
      color: #4d6dc8;
      display: flex;
      width: 260px;
      justify-content: space-between;
      .add:hover, .edit:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .render-info {
    display: flex;
    .points {
      width: 236px;
      div {
        color: #7a7a7a;
        margin-bottom: 16px;
      }
    }
    .info {
      div {
        font-weight: 500;
        margin-bottom: 16px;
      }
    }
  }
}
</style>