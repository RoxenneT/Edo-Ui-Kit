<template>
  <v-row class="px-44 py-8 bg-[#f8fbff]">
    <v-col
      justify="center"
      class="text-justify"
    >
      <div class="w-[95%]">
        <h1 class="text-3xl font-bold text-[#138fc4] mb-3.5">
          <v-icon style="font-size: 40px">
            mdi-rectangle-outline
          </v-icon>
          Card
        </h1>
        <h3>
          EdoCard является обычным стилизованным контейнером. Его параметры зависят от внутреннего контента,
          так же необходимо задать padding, чтобы EdoCard было больше контента.
          Для уникальной карточки документа, был добавлен hover, убирающий shadow у EdoCard.
          Чтобы его активировать передайте props enableHover.
        </h3>
        <h3>
          Примеры использование EdoCard в качестве контейнера:
        </h3>
        <CardUsage />
        <div class="flex flex-col gap-8">
          <DocumentFullInfo />
          <AddCompanyCard />
          <ProfileSettings />
          <GeneralSettingsCard />
        </div>
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
