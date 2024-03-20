<template>
  <EdoCard class="pa-10">
    <div class="edo-document-container">
      <div class="static">
        <div class="title">Общие настройки</div>
        <div class="subtitle">Редактировать</div>
      </div>
      <div>
        <div class="info">
          <div class="state">
            Статус визирования
          </div>
          <div class="status">
            Активен
          </div>
          </div> 
        </div>
      </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.edo-document-container {
  width: 743px;
  height: 96px;
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
  .info {
    display: flex;
    .state {
      width: 236px;
      color: #7a7a7a;
      margin-bottom: 16px;
    }
    .status {
      font-weight: 600;
      margin-bottom: 16px;
      color: #89cb4e;
    }
  }
}
</style>