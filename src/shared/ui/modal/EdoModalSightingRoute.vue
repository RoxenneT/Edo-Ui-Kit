<script setup>
const documentTypes = [
  'Реализация товаров услуг', 
  'Возврат поставщику', 
  'Акт сверки исходящий',
  'Договоры исходящие', 
  'Произвольные документы исходящие',
  'Поступление товаров услуг', 
  'Возврат от покупателя', 
  'Акт сверки входящий',
  'Договоры входящие', 
  'Произвольные документы входящие'
];

const userEmails = [
  'ermekov25@gmail.com', 
  '500600@list.ru', 
  'sfur.nn.52@mail.ru'
];

const  headers = [
  { text: '№', value: 'index' },
  { text: 'Сотрудник', value: 'email' },
  { text: '', slot: 'action' }
];

const employees = ref([]); 
const selectedUserEmail = ref('');
const inputValue = ref('');

watch(selectedUserEmail, (newValue) => {
  if (newValue) {
    employees.value.push({ 
      index: employees.value.length + 1,
      email: newValue 
    });
  }
});

const deleteUserEmail = (indexToDelete) => {
  employees.value.splice(indexToDelete, 1);
  employees.value.forEach((employee, index) => {
    employee.index = index + 1;
  });
};
</script>

<template>
  <div class="tw-modal-holder">
    <v-card-title class="tw-model-title">
      Добавление маршрута визирования
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6" class="text-center">
          <div>
            <v-card-title>Название маршрута</v-card-title>
            <EdoInput v-model="inputValue" />
          </div>
          <div>
            <v-card-title>Типы документа</v-card-title>
            <EdoSelect :items="documentTypes" />
          </div>
          <div>
            <v-card-title>Список пользователей компании</v-card-title>
            <EdoSelect 
              :items="userEmails" 
              v-model="selectedUserEmail" 
            />
          </div>
          <div class="tw-switch-holder">
            <span>Глобальный маршрут</span>
            <EdoSwitch />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title class="text-center">Список сотрудников</v-card-title>
          <EdoTable :headers="headers" :rows="employees">
            <template #action="{ index }">
              <EdoButton 
                icon 
                color="white" 
                buttonIcon="mdi-close" 
                text-color="black" 
                variant="text" 
                size="small" 
                @click="deleteUserEmail(index)"
              />
            </template>
          </EdoTable>
        </v-col>
      </v-row>
    </v-card-text>
  </div>   
</template>

<style lang="scss" scoped>
.tw-modal-holder {
  @apply w-[900px] h-[471px]
}

.tw-model-title {
  @apply h-[40px] border-b-2 border-solid border-slate-300 font-bold text-2xl p-0 pb-3.5 mb-3.5 text-center
}
  
.tw-switch-holder {
  @apply flex justify-between items-center text-lg
}
</style>