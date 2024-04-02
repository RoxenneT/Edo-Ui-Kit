<script setup>
const dialog = ref(false);
const sdsd = [
  'dsfdf',
  'sdfdsfdsf'
]
</script>

<template>
<div>
   <EdoButton
                    icon
                    color="success"
                    textColor="white"
                    rounded="lg"
                    buttonIcon="mdi-plus"
                    @click="dialog = true"
                  ></EdoButton>
                   <EdoModal v-model="dialog">
<EdoModalSightingRoute />
                   </EdoModal>
</div>
  
</template>