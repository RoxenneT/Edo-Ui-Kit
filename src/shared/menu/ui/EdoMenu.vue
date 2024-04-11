<script setup>
const props = defineProps({
  buttonIcon: { type: String, default: '' },
  buttonSize: { type: String },
  buttonColor: { type: String, default: 'primary' },
  buttonVariant: { type: String, default: 'flat' },
  items: { type: Array, default: () => [] },
});
</script>

<template>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          :color="buttonColor"
          :variant="buttonVariant"
          :size="buttonSize"
          v-bind="props"
          class="font-bold tight-spacing"
        >
          <div class="tw-edo-menu-content">
            <v-icon v-if="buttonIcon" class="mr-1">{{ buttonIcon }}</v-icon>
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
          <v-list-item-title>
            <v-icon v-if="item.icon" class="mr-2">{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<style lang="scss" scoped>
.tw-edo-menu-content {
  @apply gap-1
}

.v-list .v-list-item--density-default{
  @apply p-1.5 min-h-[39px]
}

.v-list-item, .v-list-item-title, .v-list-item__content{
  @apply min-w-[120px] max-w-[100%] font-normal text-sm flex justify-center items-center
}
</style>
