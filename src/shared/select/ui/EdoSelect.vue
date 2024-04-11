<script setup>
const props = defineProps({
  items: [Array, Object],
  modelValue: [String, Number],
  placeholder: String,
});

const emit = defineEmits(['update:modelValue']);

const assignBinding = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});
</script>

<template>
  <v-select
    :items="items"
    v-model="assignBinding"
    :placeholder="placeholder"
    variant="plain"
  ></v-select>
</template>

<style lang="scss" scoped>
:deep(.v-field) {
  @apply h-[100%] w-[100%] bg-[#fff] shadow-[0_4px_32px_rgba(0,0,0,.06),_0_1px_1px_rgba(0,0,0,.1)] rounded-xl mb-3.5 
}

.v-select {
  @apply rounded-xl focus-within:border focus-within:border-slate-100 focus-within:border-solid
}

.v-input.v-input--horizontal.v-input--density-default.v-locale--is-ltr.v-text-field.v-input--plain-underlined.v-select.v-select--single.v-select--selected {
  @apply w-[100%]
}

:deep(.v-select__selection-text) {
  @apply pl-6
}

:deep(.v-field__input){
  @apply leading-6 font-bold text-[#121212] bg-transparent
}

:deep(.v-field__append-inner), 
:deep(.v-progress-linear), 
:deep(.v-input__details),
:deep(.v-field__outline) {
  @apply hidden w-0 h-0 
}
</style>

