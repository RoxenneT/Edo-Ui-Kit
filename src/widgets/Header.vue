<template>
  <header class="pt-2 pb-4 px-10">
    <v-row>
      <v-col>
        <div class="logo">
          <div>
            <v-img
              style="width: 90px; height: auto;"
              src="/logo.png"
            />
          </div>   
          <div>
            & UI-KIT 
          </div>
        </div>
      </v-col>
      <v-col>
        <nav>
          <NuxtLink to="/">Главная</NuxtLink>
          <NuxtLink to="/components">Компоненты</NuxtLink>
        </nav>
      </v-col>
    </v-row>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  border-bottom: 1px solid #1597CF;
  .logo{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 20px;
    font-weight: bolder;
    color: #1597CF;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    gap: 30px;
    a {
      outline: none;
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
      color: #1597CF;
      &:hover {
        text-decoration: underline;  
      }
    }
  }
}
</style>