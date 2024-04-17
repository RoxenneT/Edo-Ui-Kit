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
          Table
        </h1>
        <h3>
          EdoTable разработан так, чтобы быть гибким и удобным в использовании,
          позволяя динамично отображать данные в табличной форме. Компонент принимает два свойства: headers и rows.
        </h3>
        <h3>
          headers: массив объектов, где каждый объект определяет заголовок столбца. Каждый объект заголовка обычно
          имеет свойства, такие как text (название столбца) и value (ключ для доступа к данным строки по этому заголовку).
        </h3>
        <h3>
          Компонент использует шаблонный подход для определения содержимого ячеек, что делает его очень гибким.
          Через slots вы можете передать любой Vue компонент.
        </h3>
        <TableUsage />
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
