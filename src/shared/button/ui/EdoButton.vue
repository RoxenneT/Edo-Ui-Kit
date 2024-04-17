<script setup>
const props = defineProps({
  color: { type: String, default: '#00a0e3' },
  disabled: { type: Boolean, default: false },
  elevation: { type: Number, default: undefined },
  icon: { type: Boolean, default: false },
  buttonIcon: { type: String, default: '' },
  rounded: { type: String, default: '0' },
  size: { type: String, default: undefined },
  density: { type: String, default: 'default' },
  cursor: { type: String, default: 'pointer' },
  variant: { type: String, default: 'flat' },
  textColor: { type: String, default: '' },
  enableHover: { type: Boolean, default: false },
})

const emit = defineEmits(['click'])

const customButtonClass = computed(() => {
  return [props.textColor]
})

const onClick = () => {
  emit('click')
}
</script>

<template>
  <v-hover v-if="enableHover">
    <template #default="{ isHovering, props }">
      <v-btn
        :class="isHovering ? !customButtonClass : customButtonClass"
        :color="color"
        :icon="icon"
        :disabled="disabled"
        :variant="isHovering ? 'outlined' : 'flat'"
        :elevation="elevation"
        :size="size"
        :rounded="rounded"
        :density="density"
        :cursor="cursor"
        v-bind="props"
        class="tw-bold-text tw-tight-spacing"
        @click="onClick"
      >
        <div class="edo-button-content">
          <v-icon v-if="buttonIcon">
            {{ buttonIcon }}
          </v-icon>
          <slot />
        </div>
      </v-btn>
    </template>
  </v-hover>
  <v-btn
    v-else
    :class="customButtonClass"
    :color="color"
    :icon="icon"
    :disabled="disabled"
    :variant="variant"
    :elevation="elevation"
    :size="size"
    :rounded="rounded"
    :density="density"
    :cursor="cursor"
    class="tw-bold-text tw-tight-spacing"
    @click="onClick"
  >
    <div class="edo-button-content">
      <v-icon v-if="buttonIcon">
        {{ buttonIcon }}
      </v-icon>
      <slot />
    </div>
  </v-btn>
</template>

<style lang="scss" scoped>
.black :deep(.v-btn__content){
  @apply text-black
}

.edo-button-content {
  @apply flex items-center gap-1
}

.white :deep(.v-btn__content){
  @apply text-[#fff]
}
</style>
