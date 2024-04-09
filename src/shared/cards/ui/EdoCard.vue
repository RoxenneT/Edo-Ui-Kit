<script setup>
const props = defineProps({
  enableHover: { type: Boolean, default: false },
});
</script>

<template>
<v-hover v-if="enableHover">
  <template v-slot:default="{ isHovering, props }">
    <div 
      class="tw-edo-card-container"
      :class="{ 'tw-hover-effect': isHovering }"
      v-bind="props"
    >
      <slot></slot>
    </div>
  </template>
</v-hover>
<div 
  v-else
  class="tw-edo-card-container"
>
  <slot></slot>
</div>
</template>

<style lang="scss" scoped>
.tw-edo-card-container {
  @apply w-fit h-fit bg-[#fff] shadow-[-20px_20px_32px_rgba(0,0,0,.06),_0_1px_1px_rgba(0,0,0,.1)] rounded-3xl
}

.tw-hover-effect {
  @apply shadow-none cursor-pointer
}
</style>
