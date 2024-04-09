<script setup>
  const props = defineProps({
    color: { type: String, default: '#00a0e3' }, 
    variant: { type: String, default: 'plain' }, 
    modelValue: [String, Number, Array, Object],
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
  <v-otp-input
    v-model="assignBinding"
    :color="color"
    :variant="variant"
  ></v-otp-input>
</template>