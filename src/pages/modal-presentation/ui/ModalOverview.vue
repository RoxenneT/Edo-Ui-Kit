<script setup>
import { modalInvitation, modalDocumentRoute } from '../../modal-presentation'
</script>

<template>
  <v-row class="px-44 py-8 bg-[#f8fbff]">
    <v-col
      justify="center"
      class="text-justify"
    >
      <div class="w-[95%]">
        <h1 class="text-3xl font-bold text-[#138fc4] mb-3.5">
          <v-icon style="font-size: 40px">
            mdi-window-maximize
          </v-icon>
          Modal
        </h1>
        <h3>
          EdoModal - модальное окно, которое активируется с помощью кнопки.
          Вам нужно стилизовать кнопку используя документацию из раздела Buttons.
          Внутреннее содержимое модального окна может быть динамически определено через слоты,
          что делает компонент гибким для различных сценариев использования.
        </h3>
        <ModalUsage
          title="Приглашение"
          :items="modalInvitation"
        />
        <ModalUsage
          title="Маршрут документа"
          :items="modalDocumentRoute"
        />
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.v-col {
  @apply flex flex-col items-center
}

h3 {
  @apply text-lg text-slate-600 mb-5
}
</style>
