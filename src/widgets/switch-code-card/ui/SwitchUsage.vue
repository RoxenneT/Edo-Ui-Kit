<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels variant="accordion" class="w-[100%]">
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          EdoSwitch
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div class="mt-2">
              <span class="text-[#91c7f4]">
                &lt;EdoSwitch <span>/&gt;</span>
              </span>
            </div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="presentation">
        <div>
          <EdoSwitch />  
        </div> 
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation { 
  @apply w-[100%] min-h-[130px] max-h-fit bg-blue-100 flex justify-center items-center flex-wrap mb-8;
}
</style>