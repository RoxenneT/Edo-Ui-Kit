<script setup>
  const documentPreview = [
    {
      id: 1,
      total: 31,
      img: '/sell.svg',
      icon: 'mdi-clock-outline',
      documentName: 'Реализация товаров и услуг',
    },
  ];
</script>

<template>
  <EdoCard enableHover>
    <div 
        class="py-6 px-5 document-preview-container"
        v-for="item in documentPreview"
        :key="item.id"
    >
        <div class="subtitle pb-2">
          Всего {{ item.total }} документов 
        </div>
        <div class="document-img mb-2">
          <v-img
            style="max-width: 79px; height: auto;"
            aspect-ratio="16/9"
            cover
            :src="item.img"
          ></v-img>
        </div>
        <div class="title pb-4">
          {{ item.documentName }}
        </div>
        <div class="total-info">
            <v-icon class="mr-2" color="primary">{{ item.icon }}</v-icon>
          <div class="total-text-info">
            <div class="total-text-subtitle">Ожидает подписи</div>
            <div class="total-text-title">{{ item.total }} документов</div>
          </div>
        </div>
        
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.document-preview-container {
  width: 218px;
  height: 259px;
  .subtitle {
    text-align: center;
    line-height: 12px;
    font-size: 10px;
  }
  .document-img {
    display: flex;
    justify-content: center;
  }
  .title {
    font-weight: bold;
    line-height: 24px;
    font-size: 20px;
    min-height: 50px;
    max-width: 186px;
  }
  .total-info {
    display: flex;
    align-items: center;
    .total-text-info {
      .total-text-subtitle {
        color: #7a7a7a;
        line-height: 18px;
        font-size: 12px;
      }
      .total-text-title {
        font-weight: bold;
        line-height: 20px;
        font-size: 18px;
      }
    }
  }
}
</style>