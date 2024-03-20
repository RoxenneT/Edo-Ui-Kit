<template>
  <EdoCard class="py-9 px-10">
    <div class="company-container">
      <div class="holder">
        <div class="static">
          <div class="title">АО "ТРАНСТЕЛЕКОМ"</div>
          <div class="subtitle">980525350925</div>
        </div>
      <div class="buttons-holder">
        <EdoButton 
          color="red" 
          variant="tonal" 
          width="64" 
          height="40" 
          buttonIcon="mdi-delete-outline" 
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
      <div class="holder">
        <div class="static">
          <div class="title">АО "ТЕСТ"</div>
          <div class="subtitle">123456789021</div>
        </div>
      <div class="buttons-holder">
        <EdoButton 
          color="red" 
          variant="tonal" 
          width="64" 
          height="40" 
          buttonIcon="mdi-delete-outline" 
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
  .company-container {
    width: 502px;
    height: 120px;
    display: flex;
    flex-direction: column;
    .holder {
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      .static {
        width: 161px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .title {
          font-weight: bold;
          line-height: 24px;
        }
        .subtitle {
          line-height: 20px;
          font-size: 14px;
        }
      }
      .buttons-holder {
        display: flex;
        gap: 4px;
      }
    }
  }
</style>