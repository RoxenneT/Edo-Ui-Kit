<script setup>
  const props = defineProps({
    headers: { type: Array, required: true },
    rows: { type: Array, required: true },
  })
</script>

<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.text">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-50" v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(header, index) in headers" :key="index">
            <template v-if="header.slot">
              <slot :name="header.slot" :row="row" :index="rowIndex"></slot>
            </template>
            <template v-else>
              {{ row[header.value] }}
            </template>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<style lang="scss" scoped>
v-simple-table {
  @apply flex flex-col w-[100%] min-h-[83px] max-h-fit bg-[#fff] rounded-xl
  shadow-[0_4px_32px_rgba(0,0,0,.06),_0_1px_1px_rgba(0,0,0,.1)]
}
thead {
  @apply w-[100%]
}

th {
  @apply px-8 pt-6 pb-2 text-[#7a7a7a] text-sm leading-5
}

tbody {
  @apply w-[100%] 
}

tr{
  @apply w-[100%]
}
  
td {
  @apply px-8 text-base font-medium 
}
</style>