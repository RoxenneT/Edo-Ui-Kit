<template>
  <div class="switch-wrapper" @click="toggleSwitch">
    <div class="switch-track" :class="{ 'active': isActive }">
      <div class="switch-thumb" :style="thumbStyle"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isActive = ref(false);

const toggleSwitch = () => {
  isActive.value = !isActive.value;
};

const thumbStyle = computed(() => {
  return {
    transform: isActive.value ? 'translateX(32px)' : 'translateX(0)',
  };
});
</script>

<style>
.switch-wrapper {
  cursor: pointer;
  display: inline-block;
}
.switch-track {
  width: 64px;
  height: 32px;
  background-color: #ccc; 
  border-radius: 999px;
  transition: background-color 0.25s;
  display: flex;
  align-items: center;
  padding: 1px;
}
.switch-track.active {
  background-color: #89cb4e; 
}
.switch-thumb {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.25s;
}
</style>
