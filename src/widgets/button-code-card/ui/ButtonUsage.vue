<script setup>
defineProps({
  title: { type: String, default: '' },
  items: { type: Array, default: () => [] },
})
</script>

<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels
      variant="accordion"
      class="w-[100%]"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          {{ title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="mb-4"
            >
              <span class="text-[#91c7f4]">
                &lt;EdoButton
              </span>
              <span
                v-for="(value, name) in item.attributes"
                :key="name"
                class="text-[#91c7f4] ml-1"
              >
                <template v-if="value === true">
                  {{ name }}
                </template>
                <template v-else>
                  {{ name }}="<span class="text-[#7bf6b8]">{{ value }}</span>"
                </template>
              </span>
              <span class="text-[#91c7f4] deleteSpace">
                &gt;
              </span>
              <span class="deleteSpaces">{{ item.name }}</span>
              <span class="text-[#91c7f4]">
                &lt;/EdoButton&gt;
              </span>
            </div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="presentation">
      <EdoButton
        v-for="(item, index) in items"
        :key="index"
        v-bind="item.attributes"
      >
        {{ item.name }}
      </EdoButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  @apply w-[100%] min-h-[130px] max-h-fit bg-blue-100 flex justify-center items-center gap-5 flex-wrap;
}

.deleteSpace {
  @apply ml-[-4px]
}

.deleteSpaces {
  @apply ml-[-3px] mr-[-3px]
}
</style>
