<script setup>
  const textValue = ref('');
</script>

<template>
  <div class="w-[468px] h-[596px] flex flex-col">
    <h1 class="text-3xl font-bold text-center mb-2">Нужна помощь?</h1>
    <h4 class="text-base text-center font-medium px-4 mb-6">
      Если вы столкнулись с трудностями или у вас есть особые пожелания, 
      пожалуйста, детально опишите проблему и мы с вами свяжемся
    </h4>
    <div class="w-[468px] h-[258px]">
      <EdoTextarea v-model="textValue" rows=10 label="Напишите причину для отзыва" />
    </div>
    <EdoInput placeholder="Номер телефона" class="mt-8"/>
    <div class="flex justify-center mt-12">
      <EdoButton 
        color="success" 
        textColor="white" 
        rounded="lg" 
        size="large" 
        class="w-[170px]"
      >
        Продолжить
      </EdoButton>
    </div>
  </div>
</template>