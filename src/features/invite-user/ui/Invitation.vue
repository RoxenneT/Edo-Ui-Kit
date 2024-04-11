<template>
  <div class="invitationContainer">
    <h1 class="font-bold text-2xl mb-6">Отправить приглашение</h1>
    <span class="text-base mb-3">Почта:</span>
    <EdoInput class="mb-6" placeholder="Введите почту" />
    <v-row>
      <v-col>
        <EdoButton 
          size="large" 
          rounded="lg" 
          color="success" 
          textColor="white"
          class="w-[100%]"
        >
          Отправить
        </EdoButton>
      </v-col>
       <v-col>
        <EdoButton 
          size="large" 
          rounded="lg" 
          color="error" 
          textColor="white"
          class="w-[100%]"
        >
          Отменить
        </EdoButton>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.invitationContainer {
  @apply w-[436px] h-[244px] flex flex-col
}
</style>