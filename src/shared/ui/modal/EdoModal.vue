<script setup>
const props = defineProps({
  modelValue: Boolean,
});

const emits = defineEmits(['update:modelValue']);

const dialog = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    dialog.value = newValue;
  }
);

const close = () => {
  emits('update:modelValue', false);
};
</script>

<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card class="pa-4">
      <EdoButton 
        class="button"
        color="white" 
        buttonIcon="mdi-close" 
        icon 
        rounded="xl" 
        size="small"
        @click="close" 
      />
      <slot></slot>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
.v-card {
  border-radius: 15px !important;
  max-width: fit-content;
  max-height: fit-content;
}

.button {
  height: 24px;
  width: 24px;
}
</style>
