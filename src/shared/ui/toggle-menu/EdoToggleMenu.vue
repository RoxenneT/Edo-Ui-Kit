<script setup>
  const activePoint = ref(null);

  const props = defineProps({
    content: { type: Array, default: () => [] },
  });

  function setActivePoint(pointKey) {
    activePoint.value = pointKey;
  };
</script>
<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        rounded="lg"
        v-for="(item, index) in content"
        :key="`item-${index}`"
      >
        <v-expansion-panel-title>
          <div class="tw-title">{{ item.title }}</div>
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
    &:first-child{
      border-top-left-radius: 8px !important;
      border-top-right-radius: 8px !important;
    }
    &:last-child {
      border-bottom-left-radius: 8px !important;
      border-bottom-right-radius: 8px !important;
    }
  }

  :deep(.v-expansion-panel-text__wrapper) {
    @apply p-0 h-[69px] flex items-center border-t border-solid border-slate-200
  }

  .tw-title {
    @apply font-bold text-base leading-6
  }

  .points {
    font-size: 12px;
    line-height: 18px;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    &.is-active, &:hover {
      background: #ecf5ff;
      cursor: pointer;
      &::after {
        content: "";
        width: 2px;
        height: 22px;
        background: #89cb4e;
        display: block;
        position: absolute;
        top: 30%;
        left: 0%;
      }
    } 
  }
</style>