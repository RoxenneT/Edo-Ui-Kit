<script setup>
  const buttonDefault = [{ name: 'Button' }];
  const buttonElevation = [
    {value: '4', value2: 'large', name: 'Elevation 4'},
    {value: '8', value2: 'large', name: 'Elevation 8'},
    {value: '12', value2: 'large', name: 'Elevation 12'},
    {value: '16', value2: 'large', name: 'Elevation 16'},
    {value: '20', value2: 'large', name: 'Elevation 20'},
    {value: '24', value2: 'large', name: 'Elevation 24'},
  ];
  const buttonSizes = [
    {value: 'x-small', name: 'Extra small Button'},
    {value: 'small', name: 'Small Button'},
    {name: 'Regular Button'},
    {value: 'large', name: 'Large Button'},
    {value: 'x-large', name: 'X-Large Button'},
  ];
  const buttonRoundness = [
    {value: '0', value2: 'large', name: 'Rounded 0'},
    {value: 'xs', value2: 'large', name: 'Rounded xs'},
    {value: 'sm', value2: 'large', name: 'Rounded sm'},
    {value: 'lg', value2: 'large', name: 'Rounded lg'},
    {value: 'xl', value2: 'large', name: 'Rounded xl'},
  ];
  const buttonColor = [
    {value: '#00a0e3', name: 'Button'},
    {value: '#89cb4e', value2: 'white', name: 'Button'},
    {value: '#fca5a5', value2: 'black', name: 'Button'},
    {value: '#facc15', name: 'Button'},
    {value: '#4f46e5', name: 'Button'},
  ];
  const buttonIcons = [
    {value: 'mdi-plus', value2: 'lg'},
    {value: 'mdi-cog', value2: 'xl'},
    {value: 'mdi-delete-outline', value2: 'lg'},
    {value: 'mdi-thumb-up', value2: 'xl'},
    {value: 'mdi-heart', value2: 'lg'}
  ];
  const buttonIconsText = [
    {value: 'mdi-heart', value2: 'lg', value3: 'x-large', name: 'Button'}
  ];
  const buttonVariant = [
    {value: 'elevated', value2: 'large', name: 'Elevated'},
    {value: 'flat', value2: 'large', name: 'Flat'},
    {value: 'tonal', value2: 'large', name: 'Tonal'},
    {value: 'outlined', value2: 'large', name: 'Outlined'},
    {value: 'text', value2: 'large', name: 'Text'},
    {value: 'plain', value2: 'large', name: 'Plain'}
  ];
  const buttonHover = [
    {value: 'outlined', value2: 'large', value3: 'enableHover', name: 'Enable Hover'},
  ];
  const variantInfo = [
    {title: 'elevated', text: 'приподнимает кнопку с тенью'},
    {title: 'flat', text: 'убирает тень кнопки'},
    {title: 'tonal', text: 'цвет фона с пониженной прозрачностью'},
    {title: 'outlined', text: 'применяет тонкую рамку использую текущий цвет фона'},
    {title: 'text', text: 'удаляет фон и убирает тень'},
    {title: 'plain', text: 'удаляет фон и снижает прозрачность до наведения'},
  ];
</script>

<template>
<v-row class="px-44 py-8">
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
          attribute="size"
        />
        <h3>Используйте rounded prop, чтобы контролировать радиус границы кнопки.</h3>
        <ButtonUsage 
          title="Rounded"
          :items="buttonRoundness"
          attribute="rounded"
          attribute2="size"
        />
        <h3>Свойство elevation обеспечивает до 24 уровней глубины тени.</h3>
        <ButtonUsage 
          title="Elevation"
          :items="buttonElevation"
          attribute="elevation"
          attribute2="size"
        />
        <h3>
          При передаче color, цвет текста автоманически меняется на белый или черный в зависимости от фона. 
          Но вы так же можете применить свой вариант используя textColor="white" или textColor="black". 
          В то же время цвет фона может быть абсолютно любым.
        </h3>
        <ButtonUsage 
          title="Color & textColor"
          :items="buttonColor"
          attribute="color"
          attribute2="textColor"
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
          attribute="buttonIcon"
          attribute2="rounded"
          attribute3="icon"
        />
        <ButtonUsage 
          title="Icon & Text"
          :items="buttonIconsText"
          attribute="buttonIcon"
          attribute2="rounded"
          attribute3="size"
        />
        <h3>
          The variant prop дает вам легкий доступ к нескольким различным стилям кнопок. 
          Prop enableHover применяет на кнопку hover, который меняет ее на outlined.
        </h3>
        <div class="mb-8">
          <div v-for="(item, index) in variantInfo" :key="index" class="flex bg-zinc-100 border-2 border-solid border-white">
            <div class="w-24 bg-[#00a0e3] text-white text-lg pl-2">{{ item.title }}</div>
            <div class="w-[495px] text-lg px-2">{{ item.text }}</div>
          </div>
        </div>
        <ButtonUsage 
          title="Variant"
          :items="buttonVariant"
          attribute="variant"
          attribute2="size"
        />
        <ButtonUsage 
          title="EnableHover"
          :items="buttonHover"
          attribute="variant"
          attribute2="size"
          attribute3="enableHover"
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