<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels
      variant="accordion"
      class="w-[100%]"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          EdoCard
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div>
              <span class="text-[#7bf6b8]">
                <span class="text-[#91c7f4] deleteSpaces">&lt;</span>
                EdoCard
              </span>
              <span class="text-[orange] ml-2">enableHover</span>
              <span class="text-[#91c7f4]">&gt;</span>
            </div>
            <span class="ml-4">//Внутренний контент карточки</span>
            <div>
              <span class="text-[#7bf6b8]">
                <span class="text-[#91c7f4] deleteSpaces">&lt;</span>
                EdoCard
              </span>
              <span class="text-[#91c7f4] deleteSpace">&gt;</span>
            </div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="presentation">
      <div class="w-96 h-20 flex flex-col items-center justify-center">
        <DocumentPreview />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  @apply w-[100%] h-[300px] bg-blue-100 flex justify-center items-center gap-5 flex-wrap mb-8;
}

.deleteSpace {
  @apply ml-[-4px];
}

.deleteSpaces {
  @apply ml-[-3px] mr-[-4px];
}
</style>
