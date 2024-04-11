<script setup> 
  const router = useRouter();
</script>

<template>
  <div class="tw-layout-container">
    <v-card>
      <v-layout>
        <v-navigation-drawer
          theme="light"
          permanent
        >
          <v-list nav>
            <v-list-item @click="router.push({ name: 'index' })">
              <div class="tw-logo mb-4">
                <div>
                  <v-img
                    style="width: 90px;"
                    src="/logo.png"
                  />
                </div>   
                <div>
                    & UI-KIT 
                </div>
              </div>
            </v-list-item>
            <v-list-item @click="router.push({ name: 'components-buttons' })">Buttons</v-list-item>
            <v-list-item @click="router.push({ name: 'components-inputs' })">Inputs</v-list-item>
            <v-list-item @click="router.push({ name: 'components-menus' })">Menus</v-list-item>
            <v-list-item @click="router.push({ name: 'components-modal' })">Modal</v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main class="max-h-fit min-h-[100vh]">
          <slot></slot>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
  .tw-layout-container {
    @apply w-[100vw] h-[100vh] overflow-auto
  }

  .v-navigation-drawer {
    @apply text-[#138fc4] text-lg font-bold bg-[#f8fbff]
  }

  .v-list {
    @apply w-[256px]
  }

  .tw-logo {
    @apply text-xl font-bold text-[#1597CF] flex justify-start items-end
  }
</style>