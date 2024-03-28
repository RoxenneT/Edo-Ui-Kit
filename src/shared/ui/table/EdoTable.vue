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
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
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

<script setup>
  const props = defineProps({
    headers: { type: Array, required: true },
    rows: { type: Array, required: true },
  })
</script>

<style lang="scss" scoped>
v-simple-table {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  min-height: 83px !important;
  max-height: fit-content;
  background: #fff;
  box-shadow: 0 4px 32px rgba(0,0,0,.06), 0 1px 1px rgba(0,0,0,.1);
  border-radius: 12px;
  thead {
    width: 100%;
    th {
      padding: 24px 32px 7px;
      color: #7a7a7a;
      font-size: 14px;
      line-height: 20px;
    }
  }
  tbody {
    width: 100%;
    tr{
      width: 100%;
      &:hover {
        background: hsla(0, 0%, 93.3%, .452) !important;
      } 
    }
    td {
      padding: 0 33.2px;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>