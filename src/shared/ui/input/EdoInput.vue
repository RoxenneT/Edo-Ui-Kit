<script setup>
const props = defineProps({
  type: { type: String, default: 'text'},
  modelValue: [String, Number, Array, Object],
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
  <div>
    <input
      :type="type"
      v-model="assignBinding"
      :placeholder="placeholder"
      class="input-class"
    />
  </div>
</template>

<style lang="scss" scoped>
input {
    background-color: #fff !important;
    box-shadow: 0 4px 32px rgba(0,0,0,.06), 0 1px 1px rgba(0,0,0,.1) !important;
    border-radius: 12px !important;
    padding: 15px 24px !important;
    width: 100% !important;
    border: 2px solid transparent !important;
    outline: none;
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 16px;
  }
</style>
