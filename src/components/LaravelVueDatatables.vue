<template>
  <div class="flex flex-col space-y-4">
    <div v-if="hasSlots('title') || title || caption" class="flex-1 flex flex-col space-y-4">
      <div v-if="hasSlots('title') || title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div v-if="caption">
        <caption>{{ caption }}</caption>
      </div>
    </div>

    <div class="flex-1">
      <div :class="{ 'flex justify-between content-center items-center': true, 'flex-row': !reverseHead, 'flex-row-reverse': reverseHead }">
        <div class="justify-self-start flex flex-col md:flex-row content-center md:items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
          <slot name="before.search" />
          <div v-if="!disableSearch" class="relative">
              <input type="text" :class="setupSearchClass" :style="searchStyle" v-model="search" :placeholder="searchLabel" @input="searchData()" :disabled="isLoading">
              <slot name="icon.search">
                <svg class="w-4 h-4 absolute left-2.5 top-3.5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </slot>
          </div>
          <slot name="after.search" />
        </div>

        <div class="justify-self-end flex flex-row content-center items-center space-x-2 md:space-x-4">
          <slot name="before.reload-button" />
          <button v-if="!disableReloadButton" type="button" :class="initClass(reloadButtonClass)" :style="reloadButtonStyle" @click.prevent="getData()" :disabled="isLoading">
            <slot name="label.reload-button">
              <span>{{ reloadButtonLabel }}</span>
            </slot>
          </button>
          <slot name="after.reload-button" />
        </div>
      </div>
    </div>

    <div v-if="hasSlots('before.data-table')" class="flex-1">
      <slot name="before.data-table" />
    </div>

    <div :class="{ 'flex-1 relative': true, 'hidden': grid === 'always', 'hidden md:block': grid === 'responsive', 'block': grid === 'never' }">
      <table :class="initClass(tableClass)" :style="tableStyle">
        <thead :class="initClass(theadClass)" :style="theadStyle">
          <tr>
            <th v-if="withSelect">
              <label class="flex justify-center">
                <input type="checkbox" v-model="checkedAll" :class="initClass(checkboxClass)" :style="checkboxStyle" :disabled="isLoading">
                <span />
              </label>
            </th>
            <laravel-vue-datatables-cell-header
              v-for="cell in columns"
              :key="'th-cell-' + cell.uniqid"
              v-bind="cell"
              @sort-order="resortOrder(cell, columns)"
            >
              <template v-slot:[scopedHeaderSlotName(cell.uniqid)]="slotData">
                <slot :name="'table.cell.header.' + cell.uniqid" v-bind="slotData" />
              </template>
              <template v-slot:[`icon.ascending`]>
                <slot name="icon.ascending" />
              </template>
              <template v-slot:[`icon.descending`]>
                <slot name="icon.descending" />
              </template>
            </laravel-vue-datatables-cell-header>
          </tr>
        </thead>
        <tbody v-if="isLoading">
          <tr v-if="!disableLoader && (loaderType === 'dual' || loaderType === 'bar')" class="leading-0">
            <td :colspan="withSelect ? columns.length + 1 : columns.length" class="overflow-hidden p-0">
              <div :class="setupLoadingBarClass" :style="loadingBarStyle"></div>
            </td>
          </tr>
          <slot v-if="!disableSkeletonLoader" name="table.row.skeleton">
            <tr v-for="row in parseInt(per_page)" :key="'table-loader-' + row">
              <td v-if="withSelect">
                <slot name="table.cell.skeleton.checkbox">
                  <div class="mx-auto animate-pulse h-6 w-6 bg-gray-400 rounded" />
                </slot>
              </td>
              <td v-for="col in columns" :key="'table-loader-' + row + '-' + col.uniqid">
                <slot :name="'table.cell.skeleton.' + col.uniqid" :column="col">
                  <div class="mx-auto animate-pulse h-6 bg-gray-400 rounded w-10/12" />
                </slot>
              </td>
            </tr>
          </slot>
        </tbody>
        <tbody v-else-if="!isLoading && items.length === 0">
          <tr class="group">
            <td v-if="search.length === 0" :colspan="withSelect ? columns.length + 1 : columns.length" :class="setupHoverClass">
              <slot name="label.no-record">
                <span>{{ noDataLabel }}</span>
              </slot>
            </td>
            <td v-else :colspan="withSelect ? columns.length + 1 : columns.length" :class="setupHoverClass">
              <slot name="label.no-result">
                <span>{{ noResultLabel }}</span>
              </slot>
            </td>
          </tr>
        </tbody>
        <tbody v-else-if="!isLoading && items.length > 0">
          <slot name="table.row.prepend" :items="items" />
          <tr v-for="(item, idx) in items" :key="'table-row-' + idx" class="group">
            <td v-if="withSelect" :class="setupHoverClass">
              <label class="flex justify-center">
                <slot :name="'table.cell.content.checkbox'" :row="item" :class="initClass(checkboxClass)" :style="checkboxStyle">
                  <input type="checkbox" v-model="item[selectedKey]" :class="initClass(checkboxClass)" :style="checkboxStyle" :disabled="isLoading">
                </slot>
                <span />
              </label>
            </td>

            <laravel-vue-datatables-cell-body
              v-for="cell in columns"
              :key="'td-cell-' + cell.uniqid"
              v-bind="cell"
              :row="item"
              :hoverable="hoverable"
              :hover-class="hoverClass"
            >
              <template v-slot:[scopedBodySlotName(cell.uniqid)]="slotData">
                <slot :name="'table.cell.content.' + cell.uniqid" v-bind="slotData" />
              </template>
            </laravel-vue-datatables-cell-body>
          </tr>
          <slot name="table.row.append" :items="items" />
        </tbody>
      </table>
      <div v-if="isLoading && !disableLoader && (loaderType === 'dual' || loaderType === 'block')" class="absolute inset-0 bg-gray-300 bg-opacity-30 h-full flex flex-col justify-center">
        <laravel-vue-datatables-loader>
          <template v-slot:[`loader`]>
            <slot name="loader" />
          </template>
        </laravel-vue-datatables-loader>
      </div>
    </div>

    <div :class="{ 'flex-1 relative': true, 'block': grid === 'always', 'block md:hidden': grid === 'responsive', 'hidden': grid === 'never' }">
      <div v-if="!isLoading && items.length > 0" :class="'grid gap-4 grid-cols-1 md:grid-cols-' + gridRowCount">
        <div v-for="(item, idx) in items" :key="'grid-container-' + idx" :class="initClass(gridContainerClass)" :style="gridContainerStyle">
          <slot name="grid.prepend" :item="item" />
          <div v-if="withSelect" class="flex flex-col space-y-2">
            <slot name="grid.content.header.checkbox">
              <span class="text-lg font-bold">
                Selected
              </span>
            </slot>
            <label class="flex justify-center">
              <slot :name="'grid.content.body.checkbox'" :row="item" :class="initClass(checkboxClass)" :style="checkboxStyle">
                <input type="checkbox" v-model="item[selectedKey]" :class="initClass(checkboxClass)" :style="checkboxStyle" :disabled="isLoading">
              </slot>
              <span />
            </label>
          </div>

          <laravel-vue-datatables-grid-content
            v-for="cell in columns"
            :key="'grid-content-' + cell.uniqid"
            v-bind="cell"
            :row="item"
          >
            <template v-slot:[scopedGridHeaderName(cell.uniqid)]="slotData">
              <slot :name="'grid.content.header.' + cell.uniqid" v-bind="slotData" />
            </template>
            <template v-slot:[scopedGridBodyName(cell.uniqid)]="slotData">
              <slot :name="'grid.content.body.' + cell.uniqid" v-bind="slotData" />
            </template>
          </laravel-vue-datatables-grid-content>
          <slot name="grid.append" :item="item" />
        </div>
      </div>
      <div v-else-if="!isLoading && items.length === 0" :class="'grid gap-4 grid-cols-1 md:grid-cols-' + gridRowCount">
        <div v-if="search.length === 0" :class="'text-center col-span-' + gridRowCount">
          <slot name="label.no-record">
            <span>{{ noDataLabel }}</span>
          </slot>
        </div>
        <div v-else :class="'text-center col-span-' + gridRowCount">
          <slot name="label.no-result">
            <span>{{ noResultLabel }}</span>
          </slot>
        </div>
      </div>
      <div v-else-if="isLoading">
        <div v-if="loaderType === 'dual' || loaderType === 'bar'" class="w-full overflow-hidden">
          <div :class="setupLoadingBarClass" :style="loadingBarStyle"></div>
        </div>
        <div v-if="!disableSkeletonLoader" :class="'grid gap-4 grid-cols-1 md:grid-cols-' + gridRowCount">
          <div v-for="n in gridRowCount" :key="'grid-loader-' + n">
            <slot name="grid.skeleton.container">
              <div class="shadow-lg p-4 border border-gray-400">
                <div class="flex flex-col space-y-2">
                  <div v-if="withSelect">
                    <slot name="grid.skeleton.body.checkbox">
                      <div class="mx-auto animate-pulse h-6 w-6 bg-gray-400 rounded" />
                    </slot>
                  </div>
                  <div v-for="col in columns" :key="'grid-loader-' + n + '-' + col.uniqid">
                    <slot :name="'grid.skeleton.body.' + col.uniqid" :column="col">
                      <div class="mx-auto animate-pulse h-6 bg-gray-400 rounded w-10/12" />
                    </slot>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
      <div v-if="isLoading && !disableLoader && (loaderType === 'dual' || loaderType === 'block')" class="absolute inset-0 bg-gray-300 bg-opacity-30 h-full flex flex-col justify-center">
        <laravel-vue-datatables-loader>
          <template v-slot:[`loader`]>
            <slot name="loader" />
          </template>
        </laravel-vue-datatables-loader>
      </div>
    </div>

    <div v-if="hasSlots('after.data-table')" class="flex-1">
      <slot name="after.data-table" />
    </div>

    <div v-if="!disablePagination" :class="{ 'flex-1 flex justify-between content-center items-center space-y-2 md:space-y-0': true, 'flex-col md:flex-row': !reverseNavigation, 'flex-col-reverse md:flex-row-reverse': reverseNavigation }">
      <div class="flex-initial">
        <div class="flex flex-col md:flex-row content-center items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
          <slot name="before.pagination-label" />
          <slot v-if="!disablePaginationLabel" name="label.pagination" :from="from" :to="to" :total="total">
            <span class="whitespace-nowrap font-medium">Showing {{ from }}-{{ to }} from total {{ total }} records.</span>
          </slot>
          <slot name="after.pagination-label" />
        </div>
      </div>
      <div class="flex-initial">
        <div class="flex flex-col md:flex-row content-center items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
          <slot name="before.navigation" />
          <div v-if="!disableNavigation" class="flex flex-col md:flex-row content-center items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
            <div v-if="!disableRowsPerPage" class="flex-1 md:flex-initial flex flex-row space-x-2 content-center items-center">
              <slot name="label.rows-per-page">
                <span class="whitespace-nowrap font-medium">{{ rowsPerPageLabel }}</span>
              </slot>
              <select :class="initClass(rowsPerPageClass)" :style="rowsPerPageStyle" v-model="per_page" @change="updatePerPage()" :disabled="isLoading">
                <option v-for="(option, idx) in rowsPerPageOptions" :key="'page-rows-option-' + idx" :value="option">{{ option }}</option>
              </select>
            </div>
            <div class="flex-1 md:flex-initial flex flex-row space-x-2 content-center items-center">
              <div v-if="!disableFirstPageButton" class="flex-initial">
                <button type="button" :class="initClass(firstPageButtonClass)" :style="firstPageButtonStyle" @click.prevent="gotoNav(first_page_url)" :disabled="first_page_url === null || isLoading">
                  <slot name="icon.navigation.first-page-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="stroke-current stroke-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                  </slot>
                </button>
              </div>
              <div v-if="!disablePreviousPageButton" class="flex-initial">
                <button type="button" :class="initClass(previousPageButtonClass)" :style="previousPageButtonStyle" @click.prevent="gotoNav(prev_page_url)" :disabled="prev_page_url === null || isLoading">
                  <slot name="icon.navigation.previous-page-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="stroke-current stroke-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </slot>
                </button>
              </div>
              <div v-if="!disableGotoPage" class="flex-initial">
                <select :class="initClass(gotoPageClass)" :style="gotoPageStyle" v-model="page" @change="gotoPage()" :disabled="isLoading">
                  <option v-for="option in last_page" :key="'goto-option-' + option" :value="option">{{ option }}</option>
                </select>
              </div>
              <div v-if="!disableNextPageButton" class="flex-initial">
                <button type="button" :class="initClass(nextPageButtonClass)" :style="nextPageButtonStyle" @click.prevent="gotoNav(next_page_url)" :disabled="next_page_url === null || isLoading">
                  <slot name="icon.navigation.next-page-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="stroke-current stroke-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </slot>
                </button>
              </div>
              <div v-if="!disableLastPageButton" class="flex-initial">
                <button type="button" :class="initClass(lastPageButtonClass)" :style="lastPageButtonStyle" @click.prevent="gotoNav(last_page_url)" :disabled="last_page_url === null || isLoading">
                  <slot name="icon.navigation.last-page-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="stroke-current stroke-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                  </slot>
                </button>
              </div>
            </div>
          </div>
          <slot name="after.navigation" />
        </div>
      </div>
    </div>

    <div v-if="hasSlots('footer')" class="flex-1">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.progress-bar {
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0078d4', endColorstr='#0078d4', GradientType=1 );
  height: 4px;
  -webkit-animation: progressBarAnimation 1.5s linear infinite;
	animation: progressBarAnimation 1.5s linear infinite;
}

@keyframes progressBarAnimation {
	0% {
		left: -50%;
	}
	100% {
		left: 100%;
	}
}
</style>

<script>
var filter = require('lodash/filter');
var forEach = require('lodash/forEach');
var reduce = require('lodash/reduce');
var head = require('lodash/head');
var last = require('lodash/last');
var keys = require('lodash/keys');
var merge = require('lodash/merge');
var transform = require('lodash/transform');
var join = require('lodash/join');
var includes = require('lodash/includes');
var isString = require('lodash/isString');
var isArray = require('lodash/isArray');
var split = require('lodash/split');

import LaravelVueDatatablesCellHeader from './LaravelVueDatatablesCellHeader.vue';
import LaravelVueDatatablesCellBody from './LaravelVueDatatablesCellBody.vue';
import LaravelVueDatatablesLoader from './LaravelVueDatatablesLoader.vue';
import LaravelVueDatatablesGridContent from './LaravelVueDatatablesGridContent.vue';
import { setupClass } from "./../utils/helper.js";

export default {
  name: 'LaravelVueDatatables',
  components: {
    LaravelVueDatatablesCellHeader,
    LaravelVueDatatablesCellBody,
    LaravelVueDatatablesLoader,
    LaravelVueDatatablesGridContent,
  },
  props: {
    route: { type: String, required: true },
    query: { type: [Array, String, Object], default: () => [] },
    title: String,
    caption: String,
    reverseHead: { type: Boolean, default: () => false },
    tableClass: {
      type: [Array, String, Object],
      default: () => [
        "w-full",
        "table-auto",
        "border-collapse",
      ]
    },
    tableStyle: [Array, String, Object],
    theadClass: {
      type: [Array, String, Object],
      default: () => [
        "bg-gray-300",
      ]
    },
    theadStyle: [Array, String, Object],
    columns: { type: Array, required: true },
    hoverable: { type: Boolean, default: () => true },
    hoverClass: {
      type: [Array, String, Object],
      default: () => [
        "group-hover:bg-gray-200"
      ]
    },
    disableLoader: { type: Boolean, default: () => false },
    loaderType: {
      default: () => 'block',
      validator(value) {
        return ['block', 'bar', 'dual'].includes(value);
      }
    },
    loading: { type: Boolean, default: () => false },
    loadingBarClass: {
      type: [Array, String, Object],
      default: () => []
    },
    loadingBarStyle: [Array, String, Object],
    disableSkeletonLoader: { type: Boolean, default: () => false },
    noDataLabel: { type: String, default: () => 'No records found.' },
    noResultLabel: { type: String, default: () => 'No records matching your criteria.' },
    checked: Array,
    withSelect: { type: Boolean, default: () => false },
    selectedKey: { type: String, default: () => 'isSelected' },
    checkboxClass: {
      type: [Array, String, Object],
      default: () => [
        "rounded-md",
        "w-6",
        "h-6",
      ]
    },
    checkboxStyle: [Array, String, Object],
    grid: {
      default: () => 'responsive',
      validator(value) {
        return ['always', 'responsive', 'never'].includes(value);
      }
    },
    gridContainerClass: {
      type: [Array, String, Object],
      default: () => [
        "shadow-lg",
        "p-4",
        "border",
        "border-gray-400",
      ]
    },
    gridContainerStyle: [Array, String, Object],
    gridRowCount: { type: [Number, String], default: () => 6 },
    disableSearch: { type: Boolean, default: () => false },
    searchLabel: { type: String, default: () => 'Search...' },
    searchClass: {
      type: [Array, String, Object],
      default: () => [
        "appearance-none",
        "border",
        "border-transparent",
        "bg-white",
        "text-black",
        "placeholder-gray-400",
        "shadow-md",
        "rounded-lg",
        "text-base",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-indigo-400",
        "focus:border-transparent",
      ]
    },
    searchStyle: [Array, String, Object],
    disableReloadButton: { type: Boolean, default: () => false },
    reloadButtonLabel: { type: String, default: () => 'Reload' },
    reloadButtonClass: {
      type: [Array, String, Object],
      default: () =>  [
        "focus:outline-none",
        "w-32",
        "py-2",
        "rounded-md",
        "font-semibold",
        "text-white",
        "bg-indigo-500",
        "focus:ring-4",
        "focus:ring-indigo-300",
      ]
    },
    reloadButtonStyle: [Array, String, Object],
    reverseNavigation: { type: Boolean, default: () => false },
    disablePagination: { type: Boolean, default: () => false },
    disablePaginationLabel: { type: Boolean, default: () => false },
    disableRowsPerPage: { type: Boolean, default: () => false },
    disableNavigation: { type: Boolean, default: () => false },
    disableGotoPage: { type: Boolean, default: () => false },
    gotoPageClass: {
      type: [Array, String, Object],
      default: () => [
        "appearance-none",
        "border",
        "border-transparent",
        "w-full",
        "pr-8",
        "bg-white",
        "text-black",
        "placeholder-gray-400",
        "shadow-md",
        "rounded-lg",
        "text-base",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-indigo-400",
        "focus:border-transparent",
      ]
    },
    gotoPageStyle: [Array, String, Object],
    rowsPerPageLabel: { type: String, default: () => 'Rows per page:' },
    rowsPerPage: { type: [String, Number], default: () => 10 },
    rowsPerPageClass: {
      type: [Array, String, Object],
      default: () => [
        "appearance-none",
        "border",
        "border-transparent",
        "w-full",
        "pr-8",
        "bg-white",
        "text-black",
        "placeholder-gray-400",
        "shadow-md",
        "rounded-lg",
        "text-base",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-indigo-400",
        "focus:border-transparent",
      ]
    },
    rowsPerPageStyle: [Array, String, Object],
    rowsPerPageOptions: { type: Array, default: () => [10, 20, 50] },
    disableFirstPageButton: { type: Boolean, default: () => false },
    firstPageButtonClass: {
      type: [Array, String, Object],
      default: () =>  [
        "focus:outline-none",
        "w-full",
        "p-3",
        "rounded-md",
        "font-semibold",
        "text-white",
        "bg-indigo-500",
        "focus:ring-4",
        "focus:ring-indigo-300",
      ]
    },
    firstPageButtonStyle: [Array, String, Object],
    disableLastPageButton: { type: Boolean, default: () => false },
    lastPageButtonClass: {
      type: [Array, String, Object],
      default: () =>  [
        "focus:outline-none",
        "w-full",
        "p-3",
        "rounded-md",
        "font-semibold",
        "text-white",
        "bg-indigo-500",
        "focus:ring-4",
        "focus:ring-indigo-300",
      ]
    },
    lastPageButtonStyle: [Array, String, Object],
    disablePreviousPageButton: { type: Boolean, default: () => false },
    previousPageButtonClass: {
      type: [Array, String, Object],
      default: () =>  [
        "focus:outline-none",
        "w-full",
        "p-3",
        "rounded-md",
        "font-semibold",
        "text-white",
        "bg-indigo-500",
        "focus:ring-4",
        "focus:ring-indigo-300",
      ]
    },
    previousPageButtonStyle: [Array, String, Object],
    disableNextPageButton: { type: Boolean, default: () => false },
    nextPageButtonClass: {
      type: [Array, String, Object],
      default: () =>  [
        "focus:outline-none",
        "w-full",
        "p-3",
        "rounded-md",
        "font-semibold",
        "text-white",
        "bg-indigo-500",
        "focus:ring-4",
        "focus:ring-indigo-300",
      ]
    },
    nextPageButtonStyle: [Array, String, Object],
  },
  data() {
    return {
      isLoading: false,
      call: null,
      uri: '',
      search: '',
      items: [],
      first_page_url: null,
      prev_page_url: null,
      next_page_url: null,
      last_page_url: null,
      per_page: 10,
      from: 0,
      to: 0,
      total: 0,
      page: 1,
      last_page: 1,
      selected: [],
    }
  },
  computed: {
    checkedAll: {
      get() {
        let filtered = filter(this.items, this.selectedKey);
        return this.items.length > 0 ? filtered.length === this.items.length : false;
      },
      set(newValue) {
        forEach(this.items, (value) => {
          value[this.selectedKey] = newValue;
        });
      },
    },
    setupSearchClass() {
      let newClass = this.initClass(this.searchClass);
      newClass['py-2 pl-8 pr-4 w-3/4 md:w-full'] = true;
      return newClass;
    },
    setupLoadingBarClass() {
      if (this.loadingBarClass.length === 0) {
        let newClass = ["w-1/2 relative progress-bar"];
        if (!this.loadingBarStyle) {
          newClass['bg-blue-400'];
        }
        return newClass
      }
      let newClass = this.initClass(this.loadingBarClass);
      newClass["w-1/2 relative progress-bar"] = true;
      return newClass;
    },
    setupHoverClass() {
      if (this.hoverable) {
        if (isString(this.hoverClass)) {
          return this.hoverClass + ' text-center';
        }
        let newClass = this.initClass(this.hoverClass);
        newClass['text-center'] = true;
        return newClass;
      }
      return 'text-center';
    },
    sortOrder() {
      let sortOrder = [];
      forEach(this.columns, (col) => {
        if (col.sortable) {
          sortOrder.push({
            column: col.field,
            order: col.sortOrder
          });
        }
      });
      return sortOrder;
    },
    reservedQueryParams() {
      return {
        search: this.search,
        page: this.page,
        per_page: this.per_page,
        sortOrder: this.sortOrder
      };
    },
    addedQueryParams() {
      if (this.query) {
        if (isArray(this.query) || isString(this.query)) {
          let arrayMap = isString(this.query) ? split(this.query, '&') : this.query;
          return arrayMap.length > 0 ? reduce(arrayMap, (obj, input) => ({ ...obj, [head(split(input, '='))]: last(split(input, '=')) }), {}) : null;
        }
      }
      return this.query;
    },
    selectedRows() {
      return filter(this.items, this.selectedKey);
    }
  },
  watch: {
    isLoading(newValue) {
      this.$emit('update:loading', newValue);
    },
    selectedRows(newValue) {
      this.$emit('update:checked', newValue);
    }
  },
  mounted() {
    this.per_page = this.rowsPerPage;
    this.uri = this.getCompleteUri(this.route);
    this.getData();
  },
  methods: {
    getPathUri(uri) {
      return head(split(uri, '?', 1));
    },
    getQueryParamsUri(uri) {
      let splitUri = split(uri, '?');
      let params = splitUri.length > 1 ? split(last(splitUri), '&') : [];
      let notFound = true;
      return reduce(params, (obj, param) => {
        let key = head(split(param, '='));
        notFound = true;
        forEach(keys(this.reservedQueryParams), (reservedKey) => {
          if (includes(key, reservedKey)) {
            notFound = false;
          }
        });
        if (notFound) {
          obj[head(split(param, '='))] = last(split(param, '='));
        }
        return obj;
      }, {});
    },
    getCompleteUri(uri) {
      let paramsObject = merge(this.getQueryParamsUri(uri), this.reservedQueryParams, this.addedQueryParams);
      let paramsArray = transform(paramsObject, (result, value, key) => {
        if (isArray(value)) {
          forEach(value, (val, k) => {
            result.push(key + '[' + k + '][column]' + '=' + val.column);
            result.push(key + '[' + k + '][order]' + '=' + val.order);
          });
        } else {
          result.push(key + '=' + value);
        }
      }, []);
      return this.getPathUri(uri) + '?' + join(paramsArray, '&');
    },
    searchData() {
      setTimeout(() => {
        this.uri = this.getCompleteUri(this.route);
        this.getData();
      }, 1000);
    },
    getData() {
      this.isLoading = true;

      if (this.call) {
        this.call.abort();
      }

      this.call = new XMLHttpRequest();

      this.call.responseType = "json";

      this.call.open("GET", this.uri, true);
      this.call.onload = () => {
        // In local files, status is 0 upon success in Mozilla Firefox
        if(this.call.readyState === XMLHttpRequest.DONE) {
          var status = this.call.status;
          if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            let data = this.call.response;
            this.items = data.data;
            this.first_page_url = data.first_page_url;
            this.prev_page_url = data.prev_page_url;
            this.next_page_url = data.next_page_url;
            this.last_page_url = data.last_page_url;
            this.per_page = data.per_page;
            this.from = data.from;
            this.to = data.to;
            this.total = data.total;
            this.page = data.current_page;
            this.last_page = data.last_page;
            this.isLoading = false;
          } else {
            // Oh no! There has been an error with the request!
            // console.log('Oh no! There has been an error with the request!');
            this.isLoading = false;
          }
        }
      };
      this.call.send();
    },
    gotoNav(navigationUri) {
      let params = split(last(split(navigationUri, '?')), '&');
      let paramsObject = reduce(params, (obj, param) => ({ ...obj, [head(split(param, '='))]: last(split(param, '=')) }), {});
      this.page = paramsObject.page;

      this.uri = this.getCompleteUri(navigationUri);
      this.getData();
    },
    updatePerPage() {
      this.uri = this.getCompleteUri(this.route);
      this.getData();
    },
    gotoPage() {
      this.uri = this.getCompleteUri(this.route);
      this.getData();
    },
    scopedHeaderSlotName(slotName) {
      return 'table.cell.header.' + slotName;
    },
    scopedBodySlotName(slotName) {
      return 'table.cell.content.' + slotName;
    },
    scopedGridHeaderName(slotName) {
      return 'grid.content.header.' + slotName;
    },
    scopedGridBodyName(slotName) {
      return 'grid.content.body.' + slotName;
    },
    resortOrder(cell, columns) {
      cell.sortOrder = cell.sortOrder === 'asc' ? 'desc' : 'asc';
      this.$emit('update:columns', columns);
      this.uri = this.getCompleteUri(this.uri);
      this.getData();
    },
    initClass(classObject) {
      return setupClass(classObject);
    },
    hasSlots(slotName) {
      return this.$slots ? !!this.$slots[ slotName ] : false ;
    }
  }
}
</script>
