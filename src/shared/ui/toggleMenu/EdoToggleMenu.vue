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
          <div class="title">{{ item.title }}</div>
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
    width: 300px;
  }

  :deep(.v-expansion-panel-text__wrapper) {
    padding: 0 !important;
    height: 69px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, .1);
  }

  .title {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
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