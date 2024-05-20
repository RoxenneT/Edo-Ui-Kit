<script setup>
import { inputProps } from '../../input-presentation'
</script>

<template>
  <v-row class="px-44 py-8 bg-[#f8fbff]">
    <v-col
      justify="center"
      class="text-justify"
    >
      <div class="w-[95%]">
        <h1 class="text-3xl font-bold text-[#138fc4] mb-3.5">
          <v-icon style="font-size: 40px">
            mdi-card-text-outline
          </v-icon>
          Input
        </h1>
        <h3>
          EdoInput - это инпут стилизованный для Учёт.ЭДО, обладает функционалом стандартного инпута.
        </h3>
        <div class="mb-8">
          <div
            v-for="(item, index) in inputProps"
            :key="index"
            class="flex bg-zinc-100 border-2 border-solid border-[#f8fbff]"
          >
            <div
              class="w-32 bg-blue-100 text-black text-lg pl-2"
            >
              {{ item.title }}
            </div>
            <div class="w-[100%] bg-gray-100 text-base px-2">
              {{ item.text }}
            </div>
          </div>
        </div>
        <InputUsage />
        <h3>
          EdoOtpInput используется для процедуры аутентификации пользователей по одноразовому паролю.
        </h3>
        <InputOtpUsage />
        <h3>
          EdoSelect предоставляет пользователям возможность выбирать значения из списка.
        </h3>
        <SelectUsage />
        <h3>
          EdoTextarea представляет собой компонент текстового поля с настраиваемыми параметрами.
          Помимо того что вы видете в коде, так же можно установить цвет текстового поля используя bg-color='цвет'.
        </h3>
        <TextareaUsage />
        <h3>
          EdoInputOption предоставляет возможность набора текста или выбора опции из списка.
        </h3>
        <InputOptionUsage />
        <h3>
          EdoSwitch предоставляет пользователям возможность выбирать между двумя разными значениями.
        </h3>
        <SwitchUsage />
        <h3>
          EdoFileInput используется для загрузки файлов.
        </h3>
        <InputFileUsage />
        <!-- <EdoDateRangePicker /> -->
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.v-col {
  @apply flex flex-col items-center
}

h3 {
  @apply text-lg text-slate-600 mb-5
}
</style>
