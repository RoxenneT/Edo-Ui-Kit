<script setup>
import { menuProps, menu, menuWithIcon, menuListProps } from '../../menus-presentation';
</script>

<template>
	<v-row class="px-44 py-8 bg-[#f8fbff]">
		<v-col justify='center' class="text-justify">
			<div class="w-[95%]">
				<h1 class="text-3xl font-bold text-[#138fc4] mb-3.5">
					<v-icon style="font-size: 40px">mdi-menu</v-icon>
					Menus
				</h1>
				<h3>
					К вашему пользованию предоставляется два вида меню:
				</h3>
				<h3>
					<span class="font-bold text-[#138fc4] mr-2">&#9900;</span>
					<span class="underline">EdoMenu</span> 
					представляет собой контекстное меню, которое активируется при нажатии на кнопку. 
					Вы можете настроить иконку, цвет и вариант отображения кнопки через пропсы. 
					При активации кнопки отображается меню с переходной анимацией типа "slide-x-transition". 
				</h3>
				<h3 class="mb-5">
					<span class="font-bold text-[#138fc4] mr-2">&#9900;</span>
					<span class="underline">EdoToggleMunu</span> 
					представляет собой интерактивный элемент пользовательского интерфейса, реализованный в виде аккордеона, 
					который предоставляет механизм для компактного представления и организации информации 
					через раскрывающиеся панели. 
				</h3>
				<h3 class="mb-2">
					EdoMenu props:
				</h3>
				<div class="mb-8">
          <div 
            v-for="(item, index) in menuProps" 
            :key="index" 
            class="flex bg-zinc-100 border-2 border-solid border-[#f8fbff]"
          >
            <div 
              class="w-36 bg-blue-100 text-black text-lg pl-2">{{ item.title }}</div>
            <div class="w-[100%] bg-gray-100 text-base px-2">{{ item.text }}</div>
          </div>
        </div>
				<MenuUsage title="EdoMenu" :items="menu" />
				<MenuUsage title="EdoMenu with icon" :items="menuWithIcon" />
        <h3 class="mb-2">
					EdoToggleMenu принимает:
				</h3>
        <div class="mb-8">
          <div class="flex bg-zinc-100 border-2 border-solid border-[#f8fbff]">
            <div class="w-36 bg-blue-100 text-black text-lg pl-2">
              :content
            </div>
            <div class="w-[100%] bg-gray-100 text-base px-2">
              массив объектов с ключами title и points
            </div>
          </div>
        </div>
		    <ToggleMenuUsage />
        <h3 class="mb-2">
					EdoListMenu props:
				</h3>
        <div class="mb-2">
          <div 
            v-for="(item, index) in menuListProps" 
            :key="index" 
            class="flex bg-zinc-100 border-2 border-solid border-[#f8fbff]"
          >
            <div 
              class="w-36 bg-blue-100 text-black text-lg pl-2">{{ item.title }}</div>
            <div class="w-[100%] bg-gray-100 text-base px-2">{{ item.text }}</div>
          </div>
        </div>
        <h3 class="mb-2">
					В нужном вам элементе массива укажите ключ showModal со значением true для указания, 
          что по нажатию на этот элемент будет открыто модальное окно. В остольных указыкайте showModal: 'false'.
          Нажмите на "Служба поддержки", чтобы увидеть работу showModal и enableModal.
				</h3>
        <ListMenuUsage />
	    </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.v-col {
  @apply flex flex-col items-center
}

h3 {
  @apply text-lg text-slate-600 
}
</style>