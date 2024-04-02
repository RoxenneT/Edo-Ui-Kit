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
  @apply w-[100%] bg-[#fff] shadow-[0_4px_32px_rgba(0,0,0,.06),_0_1px_1px_rgba(0,0,0,.1)] 
  rounded-xl py-4 px-6 mb-3.5 font-medium text-lg outline-none border-2 border-solid border-transparent
  }
</style>
