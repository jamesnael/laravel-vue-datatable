<template>
  <div id="app">
    <LaravelTablewind
      route="http://example-app.local/table"
      :columns.sync="columns"
      grid="never"
      with-select
      :checked.sync="selected"
      selected-key="isSelected"
      reverse-head
      reverse-navigation
    >
      <!-- <template #grid.skeleton.container>
        <div class="flex flex-col space-y-2">
          <div v-for="n in 10" :key="'grid-loader-' + n" class="mx-auto animate-pulse h-6 bg-gray-400 rounded w-10/12" />
        </div>
      </template> -->
      <!-- <template #table.row.prepend>
        <tr>
          <td>CHECKBOX</td>
          <td>CAR LICENSE</td>
          <td>Device ID</td>
          <td>IP ADDRESS</td>
          <td>TRANSMIT ADDRESS</td>
          <td>STATE</td>
          <td>UPDATED_AT</td>
          <td>ACTIONS</td>
        </tr>
      </template> -->
      <!-- <template #table.cell.skeleton.checkbox>
        <div class="mx-auto animate-pulse h-6 w-6 bg-blue-400 rounded" />
      </template> -->
      <!-- <template #grid.skeleton.body.checkbox>
        <div class="mx-auto animate-pulse h-6 w-6 bg-blue-400 rounded" />
      </template> -->
      <!-- <template #table.cell.skeleton.carlicense="{ column }">
        <span>{{ column.label }}</span>
      </template> -->
      <!-- <template #grid.skeleton.body.carlicense="{ column }">
        <span>{{ column.label }}</span>
      </template> -->
      <template #table.cell.content.carlicense="{ value, row }">
        <span>Value Format: {{ value }}</span>
        <span>Value Asli: {{ row.carlicense }}</span>
      </template>
      <template #grid.prepend="{ item }">
        <div class="flex flex-col space-y-2">
          <span class="text-lg font-bold">
            Append List
          </span>
          <span class="text-lg font-bold">
          {{ item.carlicense }}
          </span>
        </div>
      </template>
      <template #label.no-record>
        <span>labelNoRecord</span>
      </template>
      <template #label.no-result>
        <span>labelNoResult</span>
      </template>
      <template #title>
        <span>title</span>
      </template>
      <template #before.search>
        <span>beforeSearch</span>
      </template>
      <template #after.search>
        <span>afterSearch</span>
      </template>
      <template #before.reload-button>
        <span>beforeButton</span>
      </template>
      <template #after.reload-button>
        <span>afterButton</span>
      </template>
      <template #before.pagination-label>
        <span>beforePaginationLabel</span>
      </template>
      <template #after.pagination-label>
        <span>afterPaginationLabel</span>
      </template>
      <template #before.navigation>
        <span>beforeNavigation</span>
      </template>
      <template #after.navigation>
        <span>afterNavigation</span>
      </template>
      <template #footer>
        <span>footer</span>
      </template>
      <template #before.data-table>
        <span>beforeDataTable</span>
      </template>
      <template #after.data-table>
        <span>afterDataTable</span>
      </template>
    </LaravelTablewind>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LaravelTablewind from './components/LaravelTablewind.vue';

export default Vue.extend({
  name: 'App',
  components: {
    LaravelTablewind
  },
  data() {
    return {
      selected: [],
      columns: [
        {
          uniqid: 'carlicense',
          label: 'Registration Number',
          field: 'carlicense',
          visible: true,
          sortable: true,
          sortOrder: 'asc',
          align: 'center',
          classes: 'py-2 font-bold text-blue-600',
          headerClass: 'py-4',
        },
        {
          uniqid: 'carlicense',
          label: 'Device ID',
          field: 'terid',
          visible: true,
          sortable: true,
          sortOrder: 'asc',
          align: 'center',
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'registerip',
          label: 'IP Address',
          field: 'registerip',
          visible: true,
          align: 'center',
          format: (val, row) => `IPADDRESS UNTUK ID ${row.id}: ${val}:${row.registerport}`,
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'transmitip',
          label: 'IP Address',
          field: (row) => row.transmitip,
          visible: true,
          align: 'center',
          // format: (val, row) => `${val}:${row.transmitport}`,
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'state',
          label: 'Device State',
          field: 'state',
          visible: true,
          align: 'center',
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'updated_at',
          label: 'Last Modified',
          field: 'updated_at',
          visible: true,
          align: 'center',
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'actions',
          label: 'Actions',
          field: 'id',
          visible: true,
          align: 'center',
          classes: 'py-2',
          headerClass: 'py-4',
        }
      ]
    }
  }
});
</script>

<style src="./assets/index.css"></style>
