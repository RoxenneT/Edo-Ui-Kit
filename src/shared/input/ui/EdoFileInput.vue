<script setup>
  const fileSelected = (file) => {
    // Обработка выбранного файла
  }
</script>

<template>
<div class="custom-file-upload">
  <input type="file" id="file-upload" hidden/>
  <label for="file-upload" class="flex flex-col justify-center items-center gap-10">
    <img src="/upload.svg" alt="Upload" class="file-upload-icon">
    <EdoButton color="#89cb4e" textColor="white" rounded="lg" size="large" enableHover>Загрузить файл</EdoButton>
  </label>
</div>
</template>

<style lang="scss" scoped>
.custom-file-upload {
  @apply w-[488px] h-[300px] bg-[#fff] p-5 flex flex-col items-center justify-center rounded-3xl
}

.file-upload-icon {
  @apply w-[73px]
}
</style>
