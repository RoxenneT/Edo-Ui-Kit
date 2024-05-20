<script setup>
const activePoint = ref(null)
const showModal = ref(false)
const dialog = ref(false)

const props = defineProps({
  items: { type: Array, default: () => [] },
  enableModal: { type: Boolean, default: false },
})

function setActivePoint(item, index) {
  activePoint.value = `item-${index}`
  if (props.enableModal && item.showModal) {
    showModal.value = true
  }
  else {
    showModal.value = false
  }
};
</script>

<template>
  <EdoCard class="px-1 py-1">
    <div
      v-for="(item, index) in items"
      :key="`item-${index}`"
      @click="setActivePoint(item, index)"
    >
      <v-list
        :items="item.content"
        :class="['points', { 'is-active': activePoint === `item-${index}` }]"
        class="cursor-pointer"
        @click="dialog = true"
      >
        {{ item.content }}
        <div v-if="showModal">
          <v-dialog
            v-model="dialog"
            width="auto"
            transition="dialog-bottom-transition"
          >
            <v-card class="pa-4">
              <div class="flex justify-end">
                <EdoButton
                  class="tw-button"
                  color="white"
                  button-icon="mdi-close"
                  icon
                  rounded="xl"
                  size="small"
                  @click="dialog = false"
                />
              </div>
              <slot />
            </v-card>
          </v-dialog>
        </div>
      </v-list>
    </div>
  </EdoCard>
</template>

<style lang="scss" scoped>
.v-list {
  @apply px-4 pt-5 pb-4 font-bold text-base w-[285px] hover:bg-[#f7fbff] hover:after:content-['']
  hover:after:w-[2px] after:h-[22px] hover:after:bg-[#89cb4e] after:block after:absolute after:top-[32%] after:left-0
  first:rounded-lg last:rounded-lg;
}

.is-active {
  @apply bg-[#ecf5ff] after:content-[''] after:w-[2px] after:h-[22px] after:bg-[#89cb4e]
  after:block after:absolute after:top-[32%] after:left-0 #{!important};
}

.v-card {
  @apply rounded-3xl max-w-fit max-h-fit p-6 #{!important};
}
</style>
