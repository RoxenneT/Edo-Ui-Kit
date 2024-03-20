<template>
    <div class="d-flex flex-column justify-start ga-2 align-center ma-6">
        <EdoButton color="primary" size="large" rounded="lg" enableHover @click="onClick">
          Отправить документ
        </EdoButton>
        <EdoButton color="error"  rounded="lg" enableHover>Выйти</EdoButton>
        <EdoButton color="success" rounded="lg" enableHover text-color="white">Загрузить файл</EdoButton>
        <EdoButton color="black" buttonIcon="mdi-close" icon rounded="xl" size="x-small" variant="outlined" />
        <EdoButton color="success" buttonIcon="mdi-plus" icon rounded="lg" text-color="white" />
        <EdoButton color="red" variant="tonal" buttonIcon="mdi-delete-outline" icon rounded="lg" />
        <EdoMenu :items="languages" buttonVariant="elevated" buttonColor="edo-white">
          рус
        </EdoMenu>
        <EdoMenu :items="settings" buttonIcon='mdi-cog' buttonVariant="outlined" buttonColor="success">
          Подключен
        </EdoMenu>
        <EdoButton color="error" variant="outlined" rounded="lg" buttonIcon="mdi-hand-back-right-outline">
          Отозвать
        </EdoButton>
        <EdoDocumentCard />
        <EdoDashboardCard />
        <EdoProfileCard />
        <EdoGeneralSettingsCard />
        <EdoSightingRoutesCard />
        <EdoAddCompanyCard />
    </div>
</template>

<script setup>
function onClick() {
  console.log('Nose');
}

const languages = [
  { title: 'Русский', value: 'ru' },
  { title: 'Қазақша', value: 'kz' }
];

const settings = [
  { title: 'Информация', value: 'info' },
  { title: 'Настройки', value: 'setting' }
];
</script>

