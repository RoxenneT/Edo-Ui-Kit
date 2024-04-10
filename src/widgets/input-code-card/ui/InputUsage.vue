<script setup>
  const inputValue = ref('');
</script>

<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels variant="accordion" class="w-[100%]">
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          EdoInput
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div class="mb-4">
              <span class="text-[#91c7f4] flex flex-col">
                &lt;EdoInput
              </span>
              <div class="text-[#91c7f4] ml-4 flex flex-col">
                  <span>type="<span class="text-[#7bf6b8]">text</span>"</span>
                  <span>placeholder="<span class="text-[#7bf6b8]">ЭДО input</span>"</span> 
                  <span>v-model="<span class="text-[#7bf6b8]">inputValue</span>"</span>
                  <span>minLength="<span class="text-[#7bf6b8]">1</span>"</span>
                  <span>maxLength="<span class="text-[#7bf6b8]">20</span>"</span>
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
          type="text"
          placeholder="ЭДО input"
          v-model="inputValue"
          minLength=1
          maxLength=20
        />
        <div class="text-lg flex flex-row gap-1">
          <h2 class="font-bold text-[#138fc4]">inputValue:</h2> 
          {{ inputValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation { 
  @apply w-[100%] h-[130px] bg-blue-100 flex justify-center items-center gap-5 flex-wrap mb-8;
}

.deleteSpace {
  @apply ml-[-4px];
}

.deleteSpaces {
  @apply ml-[-3px] mr-[-3px];
}
</style>
