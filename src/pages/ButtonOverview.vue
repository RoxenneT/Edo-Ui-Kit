<script setup>
  const buttonDefault = [{ name: 'Button' }];
  const buttonElevation = [
    {attributes: {elevation: '4', size: 'large'}, name: 'Elevation 4'},
    {attributes: {elevation: '8', size: 'large'}, name: 'Elevation 8'},
    {attributes: {elevation: '12', size: 'large'}, name: 'Elevation 12'},
    {attributes: {elevation: '16', size: 'large'}, name: 'Elevation 16'},
    {attributes: {elevation: '20', size: 'large'}, name: 'Elevation 20'},
    {attributes: {elevation: '24', size: 'large'}, name: 'Elevation 24'},
  ];
  const buttonSizes = [
    {attributes: {size: 'x-small'}, name: 'Extra small Button'},
    {attributes: {size: 'small'}, name: 'Small Button'},
    {name: 'Regular Button'},
    {attributes: {size: 'large'}, name: 'Large Button'},
    {attributes: {size: 'x-large'}, name: 'X-large Button'},
  ];
  const buttonRoundness = [
    {attributes: {rounded: '0', size: 'large'}, name: 'Rounded 0'},
    {attributes: {rounded: 'xs', size: 'large'}, name: 'Rounded xs'},
    {attributes: {rounded: 'sm', size: 'large'}, name: 'Rounded sm'},
    {attributes: {rounded: 'lg', size: 'large'}, name: 'Rounded lg'},
    {attributes: {rounded: 'xl', size: 'large'}, name: 'Rounded xl'},
  ];
  const buttonColor = [
    {attributes: {color: '#00a0e3', size: 'large'}, name: 'Button'},
    {attributes: {color: '#89cb4e', textColor: 'white', size: 'large'}, name: 'Button'},
    {attributes: {color: '#fca5a5',textColor: 'black', size: 'large'}, name: 'Button'},
    {attributes: {color: '#facc15', size: 'large'}, name: 'Button'},
    {attributes: {color: '#4f46e5', size: 'large'}, name: 'Button'},
  ];
  const buttonIcons = [
    {attributes: {buttonIcon: 'mdi-plus', rounded: 'xl', icon: true}},
    {attributes: {buttonIcon: 'mdi-cog', rounded: 'lg', icon: true}},
    {attributes: {buttonIcon: 'mdi-delete-outline', rounded: 'xl', icon: true}},
    {attributes: {buttonIcon: 'mdi-thumb-up', rounded: 'lg', icon: true}},
    {attributes: {buttonIcon: 'mdi-heart', rounded: 'xl', icon: true}},
  ];
  const buttonIconsText = [
    {attributes: {buttonIcon: 'mdi-heart', rounded: 'lg', size: 'x-large'}, name: 'Button'}
  ];
  const buttonVariant = [
    {attributes: {variant: 'elevated', size: 'large'}, name: 'Elevated'},
    {attributes: {variant: 'flat', size: 'large'}, name: 'Flat'},
    {attributes: {variant: 'tonal', size: 'large'}, name: 'Tonal'},
    {attributes: {variant: 'outlined', size: 'large'}, name: 'Outlined'},
    {attributes: {variant: 'text', size: 'large'}, name: 'Text'},
    {attributes: {variant: 'plain', size: 'large'}, name: 'Plain'}
  ];
  const buttonHover = [
    {attributes: {variant: 'outlined', size: 'large', enableHover: 'true'}, name: 'Enable Hover'},
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
          <div v-for="(item, index) in variantInfo" :key="index" class="flex bg-zinc-100 border-2 border-solid border-white">
            <div class="w-24 bg-[#00a0e3] text-white text-lg pl-2">{{ item.title }}</div>
            <div class="w-[495px] text-slate-600 text-base px-2">{{ item.text }}</div>
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