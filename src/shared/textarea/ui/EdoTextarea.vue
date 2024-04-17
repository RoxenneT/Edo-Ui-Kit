<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  rows: { type: Number, default: 14 },
  background: { type: String, default: '' },
  modelValue: { type: Array, default: () => [] },
  max: { type: Number, default: 100 },
  min: { type: Number, default: 1 },
})

const emit = defineEmits(['update:modelValue'])

const assignBinding = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <v-textarea
    v-model="assignBinding"
    :label="label"
    variant="solo"
    :rows="rows"
    :max-length="max || undefined"
    :min-length="min || undefined"
    clear-icon="mdi-close-circle"
    clearable
    class="w-[100%]"
  />
</template>

<style lang="scss" scoped>
:deep(.v-input__details) {
  @apply hidden #{!important};
}
</style>
