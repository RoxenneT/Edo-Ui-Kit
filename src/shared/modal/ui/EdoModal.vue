<script setup>
const dialog = ref(false);
const props = defineProps({
  color: { type: String, default: '#00a0e3' },
  disabled: { type: Boolean, default: false },
  elevation: { type: Number },
  icon: { type: Boolean, default: false },
  buttonIcon: { type: String, default: '' },
  rounded: { type: String, default: '0' },
  size: { type: String },
  density: { type: String, default: 'default' },
  cursor: { type: String, default: 'pointer' },
  variant: { type: String, default: 'flat' },
  textColor: { type: String, default: ''},
  buttonText: { type: String, default: ''},
});

const customButtonClass = computed(() => {
  return [props.textColor];
});
</script>

<template>
  <div>
    <v-btn
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
      @click="dialog = true"
      class="tw-bold-text tw-tight-spacing"
    >
      <div class="edo-button-content">
        <v-icon v-if="buttonIcon">{{ buttonIcon }}</v-icon>
        <span v-if="buttonText">{{ buttonText }}</span>
      </div>
  </v-btn>
    <v-dialog 
      v-model="dialog" 
      width="auto" 
      transition="dialog-bottom-transition"
    >
      <v-card class="pa-4">
        <div class="flex justify-end">
          <EdoButton 
            class="tw-button"
            color="white" 
            buttonIcon="mdi-close" 
            icon 
            rounded="xl" 
            size="small"
            @click="dialog = false" 
          />
        </div>
        <slot></slot>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
.v-card {
  @apply rounded-3xl max-w-fit max-h-fit p-6 #{!important} 
}

.tw-button {
  @apply h-[24px] w-[24px] 
}

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
