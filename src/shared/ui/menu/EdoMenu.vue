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
          class="bold-text tight-spacing "
        >
          <div class="edo-menu-content">
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
.edo-menu-comtent {
  gap: 4px;
}

.v-list .v-list-item--density-default{
  padding: 6px !important;
  min-height: 39px !important;
}

.v-list-item .v-list-item-title{
  width: 120px;
  font-weight: 400 !important; 
  font-size: 14px !important;
  text-align: center;
}
</style>
