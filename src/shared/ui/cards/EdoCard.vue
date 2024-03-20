<script setup>
const props = defineProps({
  enableHover: { type: Boolean, default: false },
});
</script>

<template>
<v-hover v-if="enableHover">
  <template v-slot:default="{ isHovering, props }">
    <div 
      class="edo-card-container"
      :class="{ 'hover-effect': isHovering }"
      v-bind="props"
    >
      <slot></slot>
    </div>
  </template>
</v-hover>
<div 
  v-else
  class="edo-card-container"
>
  <slot></slot>
</div>
</template>

<style lang="scss" scoped>
.edo-card-container {
  width: fit-content;
  height: fit-content;
  box-shadow: -20px 20px 32px rgba(0,0,0,.06), 0 1px 1px rgba(0,0,0,.1);
  border-radius: 20px;
}

.hover-effect {
  box-shadow: none !important;
  cursor: pointer;
}
</style>
