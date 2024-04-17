<script setup>
import { documentTypes, userEmails, headers } from '..'

const employees = ref([])
const selectedUserEmail = ref('')
const selectedDocumentType = ref('')
const inputValue = ref('')

watch(selectedUserEmail, (newValue) => {
  const emailExists = employees.value.find(employee => employee.email === newValue)
  if (!emailExists) {
    employees.value.push({
      index: employees.value.length + 1,
      email: newValue,
    })
  }
})

const deleteUserEmail = (indexToDelete) => {
  employees.value.splice(indexToDelete, 1)
  employees.value.forEach((employee, index) => {
    employee.index = index + 1
  })
}
</script>

<template>
  <div class="tw-modal-holder">
    <v-card-title class="tw-model-title">
      Добавление маршрута визирования
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="text-center"
        >
          <div class="mb-4">
            <v-card-title>Название маршрута</v-card-title>
            <EdoInput v-model="inputValue" />
          </div>
          <div class="mb-4">
            <v-card-title>Типы документа</v-card-title>
            <EdoSelect
              v-model="selectedDocumentType"
              :items="documentTypes"
            />
          </div>
          <div class="mb-4">
            <v-card-title>Список пользователей компании</v-card-title>
            <EdoSelect
              v-model="selectedUserEmail"
              :items="userEmails"
            />
          </div>
          <div class="tw-switch-holder">
            <span>Глобальный маршрут</span>
            <EdoSwitch />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card-title class="text-center">
            Список сотрудников
          </v-card-title>
          <EdoTable
            :headers="headers"
            :rows="employees"
          >
            <template #action="{ index }">
              <div class="text-end">
                <EdoButton
                  icon
                  color="white"
                  button-icon="mdi-close"
                  text-color="black"
                  variant="text"
                  size="small"
                  @click="deleteUserEmail(index)"
                />
              </div>
            </template>
          </EdoTable>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<style lang="scss" scoped>
.tw-modal-holder {
  @apply w-[868px] h-[472px];
}

.tw-model-title {
  @apply h-[40px] border-b-2 border-solid border-slate-300 font-bold text-2xl p-0 mb-2 text-center;
}

.tw-switch-holder {
  @apply flex justify-between items-center text-lg mt-3.5;
}
</style>
