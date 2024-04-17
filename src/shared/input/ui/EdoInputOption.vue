<script setup>
const options = ref([
  { value: 'PDF' },
])

const userInput = ref('')

const loadSavedOptions = () => {
  const savedOptions = JSON.parse(localStorage.getItem('userInputOptions'))
  if (savedOptions && Array.isArray(savedOptions)) {
    options.value = [...savedOptions.map(option => ({ value: option }))]
  }
}

onMounted(() => {
  loadSavedOptions()
})

const handleBlur = () => {
  const value = userInput.value.trim()
  if (!value) return
  const isValueExist = options.value.some(option => option.value === value)
  if (!isValueExist) {
    options.value.push({ value: value })
    if (options.value.length > 10) {
      options.value.shift()
    }
    localStorage.setItem('userInputOptions', JSON.stringify(options.value.map(option => option.value)))
  }
}
</script>

<template>
  <div class="w-[100%] h-[100%]">
    <input
      id="userInputWithList"
      v-model="userInput"
      list="optionsList"
      @blur="handleBlur"
    >
    <datalist id="optionsList">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.value }}
      </option>
    </datalist>
  </div>
</template>

<style lang="scss" scoped>
input {
  @apply w-[100%] bg-[#fff] shadow-[0_4px_32px_rgba(0,0,0,.06),_0_1px_1px_rgba(0,0,0,.1)]
  rounded-xl py-4 px-6 font-medium text-lg outline-none border-2 border-solid border-transparent;
}
</style>
