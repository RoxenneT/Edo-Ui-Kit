<script setup>
defineProps({
  headers: { type: Array, required: true },
  rows: { type: Array, required: true },
})
</script>

<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.text"
          class="py-2 px-7 text-left"
        >
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="hover:bg-gray-50"
      >
        <td
          v-for="(header, index) in headers"
          :key="index"
          class="px-7 py-2 last:rounded-b-xl first:rounded-b-xl"
        >
          <template v-if="header.slot">
            <slot
              :name="header.slot"
              :row="row"
              :index="rowIndex"
            />
          </template>
          <template v-else>
            {{ row[header.value] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  @apply min-h-[83px] max-h-[100%] overflow-auto bg-[#fff] rounded-xl
  shadow-[0_4px_32px_rgba(0,0,0,.06),_0_1px_1px_rgba(0,0,0,.1)] p-5
}

th {
  @apply h-fit text-[#7a7a7a] text-sm leading-5
}
</style>
