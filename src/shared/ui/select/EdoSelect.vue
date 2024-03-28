<script setup>
const props = defineProps({
  items: [Array, Object],
  modelValue: [String, Number, Array, Object],
  label: String,
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
    :label="label"
    :placeholder="placeholder"
  ></v-select>
</template>

<style lang="scss" scoped>
:deep(.v-field) {
  height: auto;
  width: 100%;
  background-color: #fff !important;
  box-shadow: 0 4px 32px rgba(0,0,0,.06), 0 1px 1px rgba(0,0,0,.1) !important;
  border-radius: 12px !important;
  margin-bottom: 16px;
}

:deep(.v-field):focus-within {
  border: 1px solid rgb(206, 212, 218);
}

:deep(.v-field__overlay) {
  background-color: #fff !important;
}

:deep(.v-field__input){
  line-height: 24px !important;
  font-weight: bold !important;
  color: #121212 !important;
}

:deep(.v-field__append-inner), 
:deep(.v-progress-linear), 
:deep(.v-input__details),
:deep(.v-field__outline) {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
</style>

