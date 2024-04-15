<script setup>
const props = defineProps({
  type: { type: String, default: 'text'},
  modelValue: [String, Number, Array, Object],
  placeholder: String,
  max: Number,
  min: Number,
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
    <input
      :type="type"
      v-model="assignBinding"
      :placeholder="placeholder"
      :maxLength='max || undefined'
      :minLength='min || undefined'
      class="input-class"
    />
</template>

<style lang="scss" scoped>
input {
  @apply w-[100%] bg-[#fff] shadow-[0_4px_32px_rgba(0,0,0,.06),_0_1px_1px_rgba(0,0,0,.1)] 
  rounded-xl py-4 px-6 font-medium text-lg outline-none border-2 border-solid 
  border-transparent placeholder:text-neutral-500 placeholder:text-base;
}
</style>
