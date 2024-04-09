<script setup>
const userInput = ref('');
const options = ref([
  { value: 'Опция 1', text: 'Опция 1' },
  { value: 'Опция 2', text: 'Опция 2' },
  { value: 'Опция 3', text: 'Опция 3' },
  { value: 'Опция 4', text: 'Опция 4' },
]);

const handleInput = () => {
  console.log('Выбрано или введено:', userInput.value);
};
</script>

<template>
  <div>
    <input list="optionsList" id="userInputWithList" v-model="userInput" @input="handleInput" />
    <datalist id="optionsList">
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </datalist>
  </div>
</template>

<style lang="scss" scoped>
input {
  @apply w-[100%] bg-[#fff] shadow-[0_4px_32px_rgba(0,0,0,.06),_0_1px_1px_rgba(0,0,0,.1)] 
  rounded-xl py-4 px-6 mb-3.5 font-medium text-lg outline-none border-2 border-solid border-transparent;
}
</style>
