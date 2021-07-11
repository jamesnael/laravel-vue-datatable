<template>
  <td v-if="visible" :class="cellClass" :style="styles">
    <slot :name="'table.cell.content.' + uniqid" :row="row" :value="fieldValue(row)">
      {{ fieldValue(row) }}
    </slot>
  </td>
</template>

<script>
var isFunction = require('lodash/isFunction');
var merge = require('lodash/merge');
var isString = require('lodash/isString');
var isArray = require('lodash/isArray');
var split = require('lodash/split');
import { setupClass } from "@/utils/helper.js";

export default {
  name: 'LaravelTablewindBodyCell',
  props: {
    uniqid: { type: String, required: true },
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
    hoverable: Boolean,
    hoverClass: [Array, String, Object],
  },
  computed: {
    cellClass() {
      let newClass = this.initClass(this.classes);
      newClass['text-' + this.align] = true;
      if (this.hoverable) {
        let newHoverClass = {};
        if (isString(this.hoverClass) || isArray(this.hoverClass)) {
          let classValue = isString(this.hoverClass) ? split(this.hoverClass, ' ') : this.hoverClass;
          newHoverClass = this.initClass(classValue);
        } else {
          newHoverClass = this.hoverClass;
        }
        return merge(newClass, newHoverClass);
      }
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