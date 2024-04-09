<script setup>
  const otpValue = ref('');
</script>

<template>
  <div class="w-[100%] mb-8">
    <v-expansion-panels variant="accordion" class="w-[100%]">
      <v-expansion-panel>
        <v-expansion-panel-title class="font-bold">
          EdoOtpInput
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-black">
          <code class="code">
            <div class="mb-4">
              <span class="text-[#91c7f4]">
                &lt;EdoOtpInput 
              </span>
              <span class="text-[#91c7f4] ml-1">
                  color="<span class="text-[#7bf6b8]">success</span>"
                  variant="<span class="text-[#7bf6b8]">outlined, plain</span>"
                  v-model="<span class="text-[#7bf6b8]">otpValue</span>"
              </span>
              <span class="text-[#91c7f4]">
                /&gt;
              </span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#91c7f4]">
                &lt;script <span class="text-[#e9e978]">setup</span>&gt;  
              </span>
              <span class="text-[orange]">
                const
                <span class="text-[#7bf6b8]">
                  otpValue
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
      <div class="w-96 h-20 flex flex-col justify-center items-center">
        <EdoOtpInput  
          color="#00a0e3"
          variant="outlined, plain"
          v-model="otpValue"
        />
        <div class="text-lg flex flex-row gap-1">
          <h2 class="font-bold text-[#138fc4]">otpValue:</h2> 
          {{ otpValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation { 
  @apply w-[100%] h-[130px] bg-blue-100 flex justify-center items-center gap-5 flex-wrap mb-8;
}
</style>
