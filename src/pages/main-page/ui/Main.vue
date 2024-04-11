<script setup>
import {documents, languages} from '../../main-page';
const dialog = ref(false);
</script>

<template>
<div class="tw-home-container">
  <v-row align="center">
    <v-col justify="center">
      <img
        style="width: 600px; height: auto;"
        src="/programming.svg"
        alt="Boy with pencil"
      /> 
    </v-col>
    <v-col justify="center">
      <div class="flex flex-col justify-start gap-8 items-center">
        <div class="font-bold text-xl">
          <h2>UI-Kit, создан на основе Nuxt 3 и Vuetify &#10137;</h2>
          <h4>включает в себя всё от кнопок до меню.</h4>
        </div>
        <div class="flex flex-col justify-start gap-8 items-center">
          <div class="flex flex-col gap-4">
            <span>Edo Toggle Menu</span>
            <EdoToggleMenu :content="documents"/>
          </div>
          <div class="flex gap-8">
            <div class="flex flex-col gap-4">
              <span>Edo Button</span>
              <EdoButton 
                color="primary" 
                size="large" 
                rounded="lg"
              >
                Отправить документ
              </EdoButton>
              <span>Edo Menu</span>
              <div class="w-10">
                <EdoMenu 
                  :items="languages" 
                  buttonVariant="elevated" 
                  buttonColor="edo-white"
                >
                  рус
                </EdoMenu>
                <div class="w-20 pt-4 flex flex-col gap-4">
                  <span>Edo Modal</span>
                  <EdoModal  
                    icon
                    color="success"
                    textColor="white"
                    rounded="lg"
                    buttonIcon="mdi-plus"
                    >
                    <h1 class="w-32 h-20 text-center">Учёт KZ</h1>
                  </EdoModal>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-start gap-4 items-center">
              <span>Edo Card</span>
              <EdoDashboardCard />
            </div>
          </div>
        </div>
        <div style="width: 470px">
          <h3 class="font-bold text-lg">
            Kаждый элемент создан для обеспечения легкости интеграции и универсальности применения.
          </h3>
        </div>
      </div>
    </v-col>
  </v-row>
</div>
</template>

<style lang="scss" scoped>
.tw-home-container {
  @apply w-[100%] min-h-[100%] max-h-fit bg-[url('/background.jpg')] bg-cover
}

.v-col {
  @apply w-[700px] h-[100vh] flex flex-col justify-center items-center
}
</style>