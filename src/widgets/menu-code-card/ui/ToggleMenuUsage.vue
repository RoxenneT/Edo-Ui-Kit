<script setup>
import { documents } from '../../menu-code-card'
</script>

<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels
      variant="accordion"
      class="w-[100%]"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          EdoToggleMenu
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div class="mt-2">
              <span class="text-[#91c7f4]">
                &lt;EdoToggleMenu
                <span>content="<span class="text-[#7bf6b8]">documents</span>"</span>
                <span>/&gt;</span>
              </span>
            </div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="presentation">
      <div class="py-4">
        <EdoToggleMenu :content="documents" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  @apply w-[100%] min-h-[130px] max-h-fit bg-blue-100 flex justify-center items-center gap-5 flex-wrap mb-8;
}
</style>
