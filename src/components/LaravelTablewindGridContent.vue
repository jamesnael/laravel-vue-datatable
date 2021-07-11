<template>
  <div v-if="visible" class="flex flex-col space-y-2">
    <slot :name="'grid.content.header.' + uniqid" :label="label">
      <span class="text-lg font-bold">
        {{ label }}
      </span>
    </slot>
    <span :class="cellClass" :style="styles">
      <slot :name="'grid.content.body.' + uniqid" :row="row" :value="fieldValue(row)">
        {{ fieldValue(row) }}
      </slot>
    </span>
  </div>
</template>

<script>
var isFunction = require('lodash/isFunction');
import { setupClass } from "@/utils/helper.js";

export default {
  name: 'LaravelTablewindBodyCell',
  props: {
    uniqid: { type: String, required: true },
    label: { type: String, required: true },
    field: {
      type: [String, Function],
      default: (row) => row.id
    },
    visible: { type: Boolean, default: () => true },
    align: {
      default: () => 'left',
      validator(value) {
        return ['left', 'center', 'right'].includes(value);
      }
    },
    format: {
      type: Function,
      default: (val, row) => `${val}` // eslint-disable-line
    },
    classes: [Array, String, Object],
    styles: [Array, String, Object],
    row: { type: Object, required: true },
  },
  computed: {
    cellClass() {
      let newClass = this.initClass(this.classes);
      newClass['text-' + this.align] = true;
      return newClass;
    }
  },
  methods: {
    formatValue(value, row) {
      return this.format(value, row);
    },
    fieldValue(row) {
      let value = isFunction(this.field) ? this.field(row) : row[this.field];
      return this.formatValue(value, row);
    },
    initClass(classObject) {
      return setupClass(classObject);
    }
  }
}
</script>