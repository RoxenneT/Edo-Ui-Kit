<script setup>
const activePoint = ref(null)

defineProps({
  content: { type: Array, default: () => [] },
})

function setActivePoint(pointKey) {
  activePoint.value = pointKey
};
</script>

<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="(item, index) in content"
        :key="`item-${index}`"
        rounded="lg"
      >
        <v-expansion-panel-title>
          <div class="tw-title">
            {{ item.title }}
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text
          v-for="(text, textIndex) in item.points"
          :key="`text-${index}-${textIndex}`"
          @click="setActivePoint(`item-${index}-text-${textIndex}`)"
        >
          <div
            :class="['points', { 'is-active': activePoint === `item-${index}-text-${textIndex}` }]"
            class="py-4 px-5"
          >
            {{ text }}
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style lang="scss" scoped>
  .v-expansion-panels {
    @apply w-[300px]
  }

  .v-expansion-panel.rounded-lg {
    @apply first:rounded-t-lg last:rounded-b-lg #{!important};
  }

  :deep(.v-expansion-panel-text__wrapper) {
    @apply p-0 h-[69px] flex items-center border-t border-solid border-slate-200 cursor-pointer;
  }

  .tw-title {
    @apply font-bold text-base leading-6;
  }

  .points {
    @apply text-xs leading-4 relative w-[100%] h-[100%] flex items-center hover:bg-[#f7fbff] hover:after:content-['']
    hover:after:w-[2px] after:h-[22px] hover:after:bg-[#89cb4e] after:block after:absolute after:top-[30%] after:left-0;
  }

  .is-active {
    @apply bg-[#ecf5ff] after:content-[''] after:w-[2px] after:h-[22px] after:bg-[#89cb4e]
    after:block after:absolute after:top-[30%] after:left-0 #{!important};
  }
</style>
