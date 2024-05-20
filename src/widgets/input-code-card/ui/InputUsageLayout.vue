<script setup>
const inputValue = ref('')
</script>

<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels
      variant="accordion"
      class="w-[100%]"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          <slot name="title"></slot>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div class="mb-4">
              <span class="text-[#91c7f4] flex flex-col">
                <slot name="tagStart"></slot>
              </span>
              <div class="text-[#91c7f4] ml-4 flex flex-col">
                <slot name="attributes"></slot>
              </div>
              <span class="text-[#91c7f4]">
                /&gt;
              </span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#91c7f4]">
                &lt;script <span class="text-[#e9e978]">setup</span>&gt;
              </span>
              <span class="text-[orange] ml-4">
                const
                <span class="text-[#7bf6b8]">
                  inputValue
                </span>
                =
                <span class="text-[#e9e978]">
                  ref(<span class="text-[#7bf6b8]">' '</span>)
                  <span class="text-zinc-100">;</span>
                </span>
              </span>
              <span class="text-[#91c7f4]">
                &lt;/script&gt;
              </span>
            </div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="presentation">
      <div class="w-96 h-20 flex flex-col items-center justify-center">
        <EdoInput
          v-model="inputValue"
          type="text"
          placeholder="ЭДО input"
          min-length="1"
          max-length="20"
        />
        <div class="text-lg flex flex-row gap-1 mt-4">
          <h2 class="font-bold text-[#138fc4]">
            inputValue:
          </h2>
          {{ inputValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  @apply w-[100%] h-[150px] bg-blue-100 flex justify-center items-center gap-5 flex-wrap mb-8;
}

.deleteSpace {
  @apply ml-[-4px];
}

.deleteSpaces {
  @apply ml-[-3px] mr-[-3px];
}
</style>
