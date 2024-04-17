<script setup>
import { title, info } from '../../table-code-card'
</script>

<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels
      variant="accordion"
      class="w-[100%]"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          EdoTable
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div class="mb-4">
              <span class="text-[#91c7f4] flex flex-col">
                &lt;EdoTable
              </span>
              <div class="text-[#91c7f4] ml-4 flex flex-col">
                <span>:headers="<span class="text-[#7bf6b8]">title</span>"</span>
                <span>:rows="<span class="text-[#7bf6b8]">info</span>"</span>
              </div>
              <span class="text-[#91c7f4]">
                /&gt;
              </span>
              <span class="text-[#91c7f4] block ml-4">
                &lt;template #
                <span class="text-orange">action</span> /&gt;
              </span>
              <span class="text-[#91c7f4] flex flex-col ml-9">
                <span>&lt;<span class="text-[#7bf6b8]">EdoButton</span></span>
                <div class="ml-4 flex flex-col">
                  <span>icon</span>
                  <span>buttonIcon="<span class="text-[#7bf6b8]">mdi-heart</span>"</span>
                  <span>size="<span class="text-[#7bf6b8]">small</span>"</span>
                  <span>rounded="<span class="text-[#7bf6b8]">xl</span>"</span>
                </div>
              </span>
              <span class="text-[#91c7f4] ml-9">
                /&gt;
              </span>
              <span class="block text-[#91c7f4] ml-4">
                &lt;/template&gt;
              </span>
              <span class="block text-[#91c7f4]">
                &lt;/EdoTable&gt;
              </span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#91c7f4]">
                &lt;script <span class="text-[#e9e978]">setup</span>&gt;
              </span>
              <span class="text-[orange] ml-4 mb-2">
                const
                <span class="text-[#7bf6b8]">
                  title
                </span>
                =
                <span class="text-[#e9e978]">[</span>
                <div
                  v-for="item in title"
                  :key="item.index"
                  class="flex ml-4"
                >
                  <span class="text-[#7bf6b8] mr-2">{ text: </span>
                  <span
                    v-if="item.text"
                    class="text-[#bff67b] mr-2"
                  >{{ item.text }},</span>
                  <span
                    v-if="!item.text"
                    class="text-[#bff67b] mr-2"
                  >' ',</span>
                  <span
                    v-if="item.value"
                    class="text-[#7bf6b8] mr-2"
                  >
                    value:
                    <span class="text-[#bff67b]">{{ item.value }}</span>
                  </span>
                  <span
                    v-if="item.slot"
                    class="text-[#7bf6b8] mr-2"
                  >
                    slot:
                    <span class="text-[#bff67b]">{{ item.slot }}</span>
                  </span>
                  <span class="text-[#7bf6b8] deleteSpace">}</span>
                </div>
                <span class="text-zinc-100">
                  <span class="text-[#e9e978]">]</span>
                  ;
                </span>
              </span>
              <span class="text-[orange] ml-4">
                const
                <span class="text-[#7bf6b8]">
                  info
                </span>
                =
                <span class="text-[#e9e978]">[</span>
                <div
                  v-for="item in info"
                  :key="item.index"
                  class="flex ml-4"
                >
                  <span class="text-[#7bf6b8] mr-2">{ name: </span>
                  <span class="text-[#bff67b] mr-2">{{ item.name }},</span>
                  <span class="text-[#7bf6b8] mr-2">
                    age:
                    <span class="text-[#bff67b]">{{ item.age }}</span>
                  </span>
                  <span class="text-[#7bf6b8] deleteSpace">}</span>
                </div>
                <span class="text-zinc-100">
                  <span class="text-[#e9e978]">]</span> ;
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
      <div class="w-[40%] h-[80%] flex flex-col items-center justify-center">
        <EdoTable
          :headers="title"
          :rows="info"
        >
          <template #action>
            <div class="text-end">
              <EdoButton
                button-icon="mdi-heart"
                rounded="xl"
                icon
                size="x-small"
              />
            </div>
          </template>
        </EdoTable>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  @apply w-[100%] h-[300px] bg-blue-100 flex justify-center items-center gap-5 flex-wrap mb-8;
}

.deleteSpace {
  @apply ml-[-4px];
}

.deleteSpaces {
  @apply ml-[-3px] mr-[-3px];
}
</style>
