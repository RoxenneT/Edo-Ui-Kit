<script setup>
const props = defineProps({
  buttonIcon: { type: String, default: '' },
  buttonColor: { type: String, default: 'primary' },
  buttonVariant: { type: String, default: 'flat' },
  items: { type: Array, default: () => [] },
});
</script>

<template>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          :color="buttonColor"
          :variant="buttonVariant"
          v-bind="props"
          class="bold-text tight-spacing"
        >
          <div class="tw-edo-menu-content">
            <v-icon v-if="buttonIcon">{{ buttonIcon }}</v-icon>
            <slot />
          </div>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="item.value"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<style lang="scss" scoped>
.tw-edo-menu-comtent {
  @apply gap-1
}

.v-list .v-list-item--density-default{
  @apply p-1.5 min-h-[39px]
}

.v-list-item .v-list-item-title{
  @apply w-[120px] font-normal text-sm flex justify-center
}
</style>
