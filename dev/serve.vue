<script>
import { defineComponent } from 'vue';
import LaravelVueDatatables from '@/index';

export default defineComponent({
  name: 'ServeDev',
  components: {
    LaravelVueDatatables
  },
  data() {
    return {
      selected: [],
      columns: [
        {
          uniqid: 'first_name',
          label: 'Full Name',
          field: 'first_name',
          visible: true,
          sortable: true,
          sortOrder: 'asc',
          align: 'center',
          format: (val, row) => `${val} ${row.last_name}`,
          classes: 'py-2 font-bold text-blue-600',
          headerClass: 'py-4',
        },
        {
          uniqid: 'email',
          label: 'Email Address',
          field: 'email',
          visible: true,
          sortable: false,
          sortOrder: 'asc',
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'username',
          label: 'Username',
          field: 'username',
          visible: true,
          sortable: false,
          sortOrder: 'asc',
          align: 'center',
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'phone_number',
          label: 'Phone Number',
          field: 'phone_number',
          sortable: false,
          sortOrder: 'asc',
          visible: true,
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'address',
          label: 'Address',
          field: 'address',
          sortable: false,
          visible: true,
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'company',
          label: 'Company Name',
          field: 'company',
          sortable: false,
          sortOrder: 'asc',
          visible: true,
          classes: 'py-2',
          headerClass: 'py-4',
        },
        {
          uniqid: 'updated_at',
          label: 'Last Modified',
          field: 'updated_at',
          visible: true,
          align: 'center',
          sortable: false,
          sortOrder: 'asc',
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
      ],
      loading: false,
    }
  },
  methods: {
    editRow(row) {
      alert("function edit row " + row.id)
    },
    deleteRow(row) {
      alert("function delete row " + row.id)
    },
    reformatDateTime(value) {
      return new Date(value).toLocaleString()
    }
  }
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<template>
  <div id="app">
    <laravel-vue-datatables
      route="http://laravel-demo.local/api/table"
      v-model:columns="columns"
      with-select
      v-model:checked="selected"
      grid="always"
      selected-key="isSelected"
      loader-type="dual"
      :loading-bar-style="{ 'backgroundColor': 'yellow' }"
      v-model:loading="loading"
    >
      <template #grid.content.body.checkbox="{ row }">
        <input type="checkbox" v-model="row.isSelected" :disabled="loading" class="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none">
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
        <!-- <button type="button" @click="loading = !loading">Loading</button> -->
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
      <template #table.cell.content.email="{ value }">
        <a :href="'mailto:' + value">{{ value }}</a>
      </template>
      <template #grid.content.body.email="{ value }">
        <a :href="'mailto:' + value">{{ value }}</a>
      </template>
      <template #table.cell.content.updated_at="{ value }">
        <span>{{ reformatDateTime(value) }}</span>
      </template>
      <template #grid.content.body.updated_at="{ value }">
        <span>{{ reformatDateTime(value) }}</span>
      </template>
      <template #table.cell.content.actions="{ value, row }">
        <div class="flex flex-row space-x-4 justify-center">
          <a href="javascript;" @click.prevent="editRow(row)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-blue-700 stroke-current stroke-1" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </a>
          <a href="javascript;" @click.prevent="deleteRow(row)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-red-700 stroke-current stroke-1" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </a>
        </div>
      </template>
      <template #grid.content.body.actions="{ value, row }">
        <div class="flex flex-row space-x-4 justify-center">
          <a href="javascript;" @click.prevent="editRow(row)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-blue-700 stroke-current stroke-1" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </a>
          <a href="javascript;" @click.prevent="deleteRow(row)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-red-700 stroke-current stroke-1" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </a>
        </div>
      </template>
    </laravel-vue-datatables>
  </div>
</template>
