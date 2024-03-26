<script setup>
import { ref } from 'vue';

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

const employees = ref([]); 
const selectedUserEmail = ref('');

watch(selectedUserEmail, (newValue) => {
  if (newValue) {
    employees.value.push({ email: newValue });
  }
});

const deleteUserEmail = (index) => {
  employees.value.splice(index, 1);
}
</script>

<template>
  <div class="modal-holder">
    <v-card-title class="model-title">
      Добавление маршрута визирования
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6" class="text-center">
          <div>
            <v-card-title>Название маршрута</v-card-title>
            <input type="text">
          </div>
          <div>
            <v-card-title>Типы документа</v-card-title>
            <v-select :items="documentTypes"></v-select>
          </div>
          <div>
            <v-card-title>Список пользователей компании</v-card-title>
            <v-select :items="userEmails" v-model="selectedUserEmail"></v-select>
          </div>
          <div class="switch-holder">
            <span>Глобальный маршрут</span>
            <EdoSwitch />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title class="text-center">Список сотрудников</v-card-title>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Сотрудник</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(employee, index) in employees" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ employee.email }}</td>
                  <td>
                    <EdoButton 
                      icon 
                      color="white" 
                      buttonIcon="mdi-close" 
                      text-color="black" 
                      variant="text" 
                      size="small" 
                      @click="deleteUserEmail(index)"
                    />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card-text>
  </div>   
</template>

<style lang="scss" scoped>
  .modal-holder {
    width: 900px;
    height: 471px;
    .model-title {
      height: 40px;
      border-bottom: 2px solid rgb(236, 236, 236);
      font-weight: bold;
      font-size: 22px !important;
      padding: 0 !important;
      padding-bottom: 16px !important;
      margin-bottom: 16px !important;
      text-align: center !important;
    }
  }
  :deep(.v-field) {
    height: auto;
    width: 100%;
    background-color: #fff !important;
    box-shadow: 0 4px 32px rgba(0,0,0,.06), 0 1px 1px rgba(0,0,0,.1) !important;
    border-radius: 12px !important;
    margin-bottom: 16px;
  }
  :deep(.v-field):focus-within {
    border: 1px solid rgb(206, 212, 218);
  }
  :deep(.v-field__overlay) {
    background-color: #fff !important;
  }
  :deep(.v-field__input){
    line-height: 24px !important;
    font-weight: bold !important;
    color: #121212 !important;
  }
  :deep(.v-field__append-inner), 
  :deep(.v-progress-linear), 
  :deep(.v-input__details),
  :deep(.v-field__outline) {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  :deep(.v-card-title) {
    font-size: 18px !important;
    margin-bottom: 8px !important;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
  input {
    background-color: #fff !important;
    box-shadow: 0 4px 32px rgba(0,0,0,.06), 0 1px 1px rgba(0,0,0,.1) !important;
    border-radius: 12px !important;
    padding: 15px 24px !important;
    width: 100% !important;
    border: 2px solid transparent !important;
    outline: none;
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 16px;
  }
  .switch-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px !important;
  }
  v-simple-table {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    min-height: 83px !important;
    max-height: fit-content;
    background: #fff;
    box-shadow: 0 4px 32px rgba(0,0,0,.06), 0 1px 1px rgba(0,0,0,.1);
    border-radius: 12px;
    margin: 16px;
    thead {
      width: 100%;
      th {
        padding: 24px 32px 7px;
        color: #7a7a7a;
        font-size: 14px;
        line-height: 20px;
      }
    }
    tbody {
      tr:hover {
        background: hsla(0, 0%, 93.3%, .452) !important;
      } 
      td {
        padding: 0 32px;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
</style>