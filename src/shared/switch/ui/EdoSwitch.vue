<script setup>
import { ref, computed } from 'vue'

const isActive = ref(false)

const toggleSwitch = () => {
  isActive.value = !isActive.value
}

const thumbStyle = computed(() => {
  return {
    transform: isActive.value ? 'translateX(32px)' : 'translateX(0)',
  }
})
</script>

<template>
  <div
    class="tw-switch-wrapper"
    @click="toggleSwitch"
  >
    <div
      class="tw-switch-track"
      :class="{ active: isActive }"
    >
      <div
        class="tw-switch-thumb"
        :style="thumbStyle"
      />
    </div>
  </div>
</template>

<style>
.tw-switch-wrapper {
  @apply cursor-pointer inline-block
}
.tw-switch-track {
  @apply w-[64px] h-[32px] flex items-center p-px bg-[#ccc] rounded-full transition-[0.25s]

}
.tw-switch-track.active {
  @apply bg-[#89cb4e]
}
.tw-switch-thumb {
  @apply w-[30px] h-[30px] bg-white rounded-full transition-[0.25s] delay-100

}
</style>
