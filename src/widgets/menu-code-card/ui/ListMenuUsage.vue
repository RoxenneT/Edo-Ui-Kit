<script setup>
import { listPoints } from '..'
</script>

<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels
      variant="accordion"
      class="w-[100%]"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          EdoListMenu
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div class="mt-2">
              <div class="text-[#91c7f4] flex flex-col">
                &lt;EdoListMenu
                <span class="ml-4">:items="<span class="text-[#7bf6b8]">listPoints</span>"</span>
                <span class="ml-4">enableModal</span>
                <span>&gt;</span>
                <span class="ml-4">&lt;SupportRequest /&gt;</span>
                <span>&lt;/EdoListMenu&gt;</span>
              </div>
            </div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="presentation">
      <div class="py-4">
        <EdoListMenu
          :items="listPoints"
          enable-modal
        >
          <SupportRequest />
        </EdoListMenu>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  @apply w-[100%] min-h-[130px] max-h-fit bg-blue-100 flex justify-center items-center gap-5 flex-wrap mb-8;
}
</style>
