<script setup>
  const documentInfo = [
    {
      subtitle: 'Получатель',
      title: 'ТОО "GLOVO KAZAKHSTAN" (ГЛОВО КАЗАХСТАН)',
      subtitle2: '190640018883'
    },
    {
      subtitle: 'Регистрационный номер',
      title: '8125062f-4673-400d-8119-42f3a61ccb45',
      subtitle2: '16 мая 2022 00:42',
      explanation: 'Дата загрузки'
    },
    {
      subtitle: 'E-mail получателя',
      title: 'Ermekov25@gmail.com',
    },
    {
      subtitle: 'Регистрационный номер 1С',
      title: '00000000056',
    },
  ];
  const documentPreview = [
    {
      id: 1,
      img: '/sell.svg',
      documentName: 'Реализация товаров и услуг',
    },
  ];
</script>

<template>
  <EdoCard class="pt-10 pb-5 px-10">
    <div class="edo-document-container">
      <div
        class="document-preview-container"
        v-for="item in documentPreview"
        :key="item.id"
      >
        <div class="go-back mb-4">
          <v-icon class="pr-2">mdi-arrow-u-left-top</v-icon>
          <p>К списку документов</p>
        </div>
        <div>
          <div class="document-img">
            <v-img
              style="max-width: 72px; height: auto;"
              aspect-ratio="16/9"
              cover
              :src="item.img"
            ></v-img>
          </div>
          <div class="title pb-4">
            {{ item.documentName }}
          </div>
        </div>
      </div>
      <div class="document-info">
        <div class="card-content"
          v-for="item in documentInfo"
          :key="item.subtitle"
        >
          <div class="subtitle">{{ item.subtitle }}</div>
          <div class="title">{{ item.title }}</div>
          <div v-if="item.subtitle2" class="subtitle2">
            {{ item.subtitle2 }} 
            <span>{{ item.explanation }}</span>
        </div>
        </div>
      </div>
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.edo-document-container {
  max-width: 823px;
  height: 188px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
   .document-preview-container {
      width: 148px;
      height: 188px;
      .go-back {
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        p {
          width: 67px;
          color: #5ca51a;
          font-size: 12px;
        }
      }
      .title {
        font-weight: bold;
        line-height: 24px;
        font-size: 16px;
      }
    }
    .document-info {
      width: 650px;
      height: 188px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 40px 0px;
    }
    .card-content {
      width: 300px; 
      max-height: 110px;
      min-height: 62px;
        .subtitle {
          color: #246488;
          line-height: 18px;
          font-size: 12px;
          margin-bottom: 4px;
        }
        .title {
          font-weight: bold;
          line-height: 24px;
          margin-bottom: 4px;
        }
        .subtitle2 {
          line-height: 20px;
          font-size: 14px;
            span {
              margin-left: 8px;
              color: #7a7a7a;
            }
        }
    }
}
</style>