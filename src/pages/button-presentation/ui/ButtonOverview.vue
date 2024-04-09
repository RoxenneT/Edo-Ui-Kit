<script setup>
import {
  buttonDefault,
  buttonElevation,
  buttonSizes,
  buttonRoundness,
  buttonColor,
  buttonIcons,
  buttonIconsText,
  buttonVariant,
  buttonHover,
  variantInfo
} from '../../button-presentation';
</script>

<template>
<v-row class="px-44 py-8 bg-[#f8fbff]">
  <v-col justify='center' class="text-justify">
    <div class="w-[95%]">
      <h1 class="text-3xl font-bold text-[#138fc4] mb-3.5">
        <v-icon style="font-size: 40px">mdi-gesture-tap-button</v-icon>
        Buttons
      </h1>
      <h3>
        EdoButton - универсальный элемент управления, разработанный для простоты использования и адаптации. 
        Её можно легко стилизовать, изменяя цвета, размеры, рамки и тени. 
        Она предлагает гибкие настройки стиля без ущерба для функциональности.
      </h3>
      <div class="flex justify-center my-5">
        <ButtonUsage 
          title="Default Edo Button"
          :items="buttonDefault"
        />
      </div>
      <div class="mt-5">
        <h2 class="font-bold text-2xl text-[#138fc4]">Использование</h2>
        <h3>
          Для создания нужной вам кнопки используйте комбинации props.
        </h3>
        <h3>
          Свойство size используется для управления размером кнопки. 
          Размер по умолчанию не определен, что по сути означает средний.
        </h3>
        <ButtonUsage 
          title="Size"
          :items="buttonSizes"
        />
        <h3>Используйте rounded prop, чтобы контролировать радиус границы кнопки.</h3>
        <ButtonUsage 
          title="Rounded"
          :items="buttonRoundness"
        />
        <h3>Свойство elevation обеспечивает до 24 уровней глубины тени.</h3>
        <ButtonUsage 
          title="Elevation"
          :items="buttonElevation"
        />
        <h3>
          При передаче color, цвет текста автоманически меняется на белый или черный в зависимости от фона. 
          Но вы так же можете применить свой вариант используя textColor="white" или textColor="black". 
          В то же время цвет фона может быть абсолютно любым.
        </h3>
        <ButtonUsage 
          title="Color & textColor"
          :items="buttonColor"
        />
         <h3>
          Icon можно использовать для основного содержимого кнопки. Prop icon добавляет стили для иконки.
          В buttonIcon передается название иконки, их работу осуществляет "@mdi/font". 
          Нужную вам иконку и ее название можно найти на сайте 
          <a class="text-sky-600" href="https://pictogrammers.com/libraries/">Pictogrammers.</a>
        </h3>
        <ButtonUsage 
          title="Icon"
          :items="buttonIcons"
        />
        <ButtonUsage 
          title="Icon & Text"
          :items="buttonIconsText"
        />
        <h3>
          The variant prop дает вам легкий доступ к нескольким различным стилям кнопок. 
          Prop enableHover применяет на кнопку hover, который меняет ее на outlined.
        </h3>
        <div class="mb-8">
          <div 
            v-for="(item, index) in variantInfo" 
            :key="index" 
            class="flex bg-zinc-100 border-2 border-solid border-[#f8fbff]"
          >
            <div 
              class="w-32 bg-blue-100 text-black text-lg pl-2">{{ item.title }}</div>
            <div class="w-[100%] bg-gray-100 text-base px-2">{{ item.text }}</div>
          </div>
        </div>
        <ButtonUsage 
          title="Variant"
          :items="buttonVariant"
        />
        <ButtonUsage 
          title="EnableHover"
          :items="buttonHover"
        />
      </div>
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