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
        <EdoToggleMenu :content="instraction"/>
        <EdoToggleMenu :content="documents"/>
        <div>
          <EdoButton
            icon
            color="success"
            textColor="white"
            rounded="lg"
            buttonIcon="mdi-plus"
            @click="dialog = true"
          ></EdoButton>
          <EdoModal v-model="dialog">
            <EdoModalSightingRoute />
          </EdoModal>
        </div>
    </div>
</template>

<script setup>
const dialog = ref(false);

function onClick() {
  console.log('Nose');
};

const languages = [
  { title: 'Русский', value: 'ru' },
  { title: 'Қазақша', value: 'kz' }
];

const settings = [
  { title: 'Информация', value: 'info' },
  { title: 'Настройки', value: 'setting' }
];

const instraction = [
  {
    title: 'Как пользоваться Учёт.ЭДО',
    points: [
      'Как зарегистрироваться в сервисе Учёт.ЭДО', 
      'Как работать в сервисе Учёт.ЭДО', 
      'Как подписать электронный документ', 
      'Как выписать электронный документ на сайте'
    ]
  },
  {
    title: 'Как работать в 1С с Учёт.ЭДО',
    points: [
      'Расширение Учёт.ЭДО для 1С', 
      'Как подключить сервис электронного документооборота Учёт.ЭДО в 1С', 
      'Как работать с электронными документами', 
    ]
  },
  {
    title: 'Видеоинструкции',
    points: [
      'Выписка ЭД из 1С', 
      'Создание учетного документа из ЭДО в 1С', 
      'Подключение Учёт.ЭДО к 1С', 
      'Как получить и подписать электронный документ в 1С'
    ]
  },
];

const documents = [
  {
    title: 'Исходящие',
    points: [
    'Реализация товаров и услуг',
    'Возврат поставщику',
    'Акт сверки',
    'Договоры',
    'Произвольный документ',
    'Запросы на отзыв'
    ]
  },
  {
    title: 'Входящие',
    points: [
    'Поступление товаров и услуг',
    'Возврат от покупателя',
    'Акт сверки',
    'Договоры',
    'Произвольный документ',
    'АО ТРАНСТЕЛЕКОМ'
    ]
  }
]
</script>

