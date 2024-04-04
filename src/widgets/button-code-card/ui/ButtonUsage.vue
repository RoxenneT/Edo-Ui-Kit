<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels variant="accordion" class="w-[100%]">
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          {{ title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div v-for="(item, index) in items" :key="index" class="mb-4">
              <span class="text-[#ccc]">&lt;</span>
              <span class="text-[#e2777a]">EdoButton</span>
              
              <span v-if="attribute" class="text-[#e2777a] ml-1">{{ attribute }}</span>
              <span v-if="attribute" class="text-[#ccc]">=</span>
              <span v-if="attribute" class="text-[#ccc]">"</span>
              <span v-if="attribute" class="text-[#7ec699]">{{ item.value }}</span>
              <span v-if="attribute" class="text-[#ccc]">"</span>

              <span v-if="item.value2" class="text-[#e2777a] ml-1">{{ attribute2 }}</span>
              <span v-if="item.value2" class="text-[#ccc]">=</span>
              <span v-if="item.value2" class="text-[#ccc]">"</span>
              <span v-if="item.value2" class="text-[#7ec699]">{{ item.value2 }}</span>
              <span v-if="item.value2" class="text-[#ccc]">"</span>

              <span v-if="item.value3" class="text-[#e2777a] ml-1">{{ attribute3 }}</span>
              <span v-if="item.value3" class="text-[#ccc]">=</span>
              <span v-if="item.value3" class="text-[#ccc]">"</span>
              <span v-if="item.value3" class="text-[#7ec699]">{{ item.value3 }}</span>
              <span v-if="item.value3" class="text-[#ccc]">"</span>

              <span class="text-[#ccc]">&gt;</span>
              <span v-if="item.name" class="text-[#ccc] ml-4 block">{{ item.name }}</span>
              <span class="text-[#ccc]">&lt;</span>
              <span class="text-[#e2777a]">/EdoButton</span>
              <span class="text-[#ccc]">&gt;</span>
            </div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="presentation">
      <EdoButton 
        v-for="(item, index) in items" 
        :key="index" 
        :[attribute]="item.value" 
        :[attribute2]="item.value2 ? item.value2 : undefined" 
        :[attribute3]="item.value3 ? item.value3 : attribute3"
      >
        {{ item.name }}
      </EdoButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Array,
  attribute: String,
  attribute2: { type: String, default: null },
  attribute3: { type: String, default: null },
})
</script>

<style lang="scss" scoped>
.presentation { 
  @apply w-[100%] min-h-[130px] max-h-fit bg-zinc-100 flex justify-center items-center gap-5 flex-wrap 
}
</style>
