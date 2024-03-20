<script setup>
  const profileInfo = [
    '980525350925',
    'АО "ТРАНСТЕЛЕКОМ"',
    '87028130028',
    'ermekov25@gmail.com',
    'Неактивно',
  ];
  const titleInfo = [
    'БИН', 
    'Наименование компании', 
    'Номер телефона', 
    'Email', 
    'Отображения даты подписания документов'
  ];
</script>

<template>
  <EdoCard class="pa-10">
    <div class="edo-document-container">
      <div class="static">
        <div class="title">Общая информация</div>
        <div class="subtitle">Редактировать профиль</div>
      </div>
      <div>
        <div class="render-info">
          <div class="points">
            <div v-for="title in titleInfo" :key="title">
              {{ title }}
            </div>
          </div>
          <div class="info">
            <div v-for="item in profileInfo" :key="item.index">
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
  height: 272px;
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
      &:hover {
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