<template>
  <th v-if="visible" :class="initClass(headerClass)" :style="headerStyle">
    <div :class="{ 'flex flex-row': true, 'justify-between items-center cursor-pointer': sortable, 'justify-center': !sortable }" @click.prevent="changeSortOrder()">
      <div class="flex-grow">
        <slot :name="'table.cell.header.' + uniqid" :label="label">
          {{ label }}
        </slot>
      </div>
      <div v-if="sortable" class="flex-none">
        <slot v-if="sortOrder === 'asc'" name="icon.ascending">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down-alt" viewBox="0 0 16 16">
            <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
          </svg>
        </slot>
        <slot v-else name="icon.descending">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up-alt" viewBox="0 0 16 16">
            <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
          </svg>
        </slot>
      </div>
    </div>
  </th>
</template>

<script>
import { setupClass } from "@/utils/helper.js";

export default {
  name: 'LaravelTablewindHeaderCell',
  props: {
    uniqid: { type: String, required: true },
    label: { type: String, required: true },
    visible: { type: Boolean, default: () => true },
    sortable: { type: Boolean, default: () => false },
    sortOrder: {
      default: () => 'asc',
      validator(value) {
        return ['asc', 'desc'].includes(value);
      }
    },
    headerClass: [Array, String, Object],
    headerStyle: [Array, String, Object],
  },
  methods: {
    changeSortOrder() {
      if (this.sortable) {
        this.$emit('sort-order');
      }
    },
    initClass(classObject) {
      return setupClass(classObject);
    }
  }
}
</script>