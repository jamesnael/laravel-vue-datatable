<h1>laravel-vue-datatables</h1>

Laravel datatable wrapper with Vue JS and Tailwind CSS.

<br><br>

<h3>

[Example](https://laravel-vue-datatables.herokuapp.com/)


[DEMO on codesandbox](https://codesandbox.io/s/n9qb8?file=/src/App.vue)
</h3>

<br><br>

<h1>Table of Contents</h1>

- [Installation](#installation)
- [Usage](#usage)
  - [v-model](#v-model)
  - [Props](#props)
    - [Table Props](#table-props)
    - [Checkbox Props](#checkbox-props)
    - [Grid Props](#grid-props)
    - [Search Field Props](#search-field-props)
    - [Reload Button Props](#reload-button-props)
    - [Reverse Props](#reverse-props)
    - [Pagination Props](#pagination-props)
    - [Columns Props](#columns-props)
  - [Slots](#slots)
  - [Dynamic Slots](#dynamic-slots)
  - [Sent Request](#sent-request)
  - [Laravel Response](#laravel-response)
- [License](#license)

<br><br>

# Installation
Install using package manager:
```bash
npm install laravel-vue-datatables
```

Then add it to your component files
```html
<!-- MyComponent.vue -->

<template>
  <laravel-vue-datatables
    route="https:://mydomain.com/table"
    v-model:columns="columns"
  />
  
  <!-- for Vue 2 component

  <laravel-vue-datatables
    route="https:://mydomain.com/table"
    :columns.sync="columns"
  />

  -->
</template>

<script>
import LaravelVueDatatables from 'laravel-vue-datatables';
require('laravel-vue-datatables/dist/laravel-vue-datatables.css');

export default {
  name: 'MyComponent',
  components: {
    LaravelVueDatatables,
  },
  data() {
    return {
      columns: [
        {
          uniqid: 'firstName',
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
        ...
      ]
    }
  }
  ...
}
</script>
```

<br><br>

# Usage

## v-model

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><strong>columns</strong></td>
<td align="center"><em>Array</em></td>
<td align="center"><strong>Yes</strong></td>
<td>

```html
<template>
  <laravel-vue-datatables
    route="https:://mydomain.com/table"
    v-model:columns="columns"
  />

  <!-- for Vue 2 component

  <laravel-vue-datatables
    route="https:://mydomain.com/table"
    :columns.sync="columns"
  />
  
  -->
</template>
```
Please refer to [`columns`](#columns-props) props for detailed usage and explanation.
</td>
</tr>
<tr>
<td><strong>checked</strong></td>
<td align="center"><em>Array</em></td>
<td align="center">Optional</td>
<td>

```html
<template>
  <laravel-vue-datatables
    route="https:://mydomain.com/table"
    v-model:columns="columns"
    with-select
    v-model:checked="yourCheckedModel"
    selected-key="isSelected"
  />

  <!-- for Vue 2 component

  <laravel-vue-datatables
    route="https:://mydomain.com/table"
    :columns.sync="columns"
    with-select
    :checked.sync="yourCheckedModel"
    selected-key="isSelected"
  />
  
  -->
</template>
```
Your v-model to get selected row if you use `with-select` props.
</td>
</tr>
</tbody>
</table>


<br><br>

## Props

<br>

### Table Props

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th align="center">Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><strong>route</strong></td>
<td align="center"><em>String</em></td>
<td align="center"><strong>Yes</strong></td>
<td align="center"></td>
<td>Enter your laravel uri for laravel-vue-datatables to get data from.</td>
</tr>
<tr>
<td><strong>query</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center">

`[]`
</td>
<td>
Add your custom query parameters before get data from your laravel server.

<br><br>

Example as string:
```json
query="foo=bar&hello=world"
```

Example as array:
```json
:query='[ "foo=bar", "hello=world" ]'
```

Example as object:
```json
:query='{ "foo": "bar", "hello": "world" }'
```
</td>
</tr>
<tr>
<td><strong>title</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Generate table title.

**Note**: *This props will be rendered above search field, if you want to add above the table use `after.data-table` slot.*
</td>
</tr>
<tr>
<td><strong>caption</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Generate table caption with `<caption>` tag
</td>
</tr>
<tr>
<td><strong>table-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
  "w-full",
  "table-auto",
  "border-collapse",
]
```
</td>
<td>

Example as string:
```json
"font-bold text-blue-400"
```

Example as array:
```json
[
  "font-bold",
  "text-blue-400"
]
```

Example as object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>table-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as string:

```json
"background-color: red"
```

Example as array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>thead-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
  "bg-gray-300",
]
```
</td>
<td>

Example as string:
```json
"font-bold text-blue-400"
```
Example as array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>thead-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as string:
```json
"background-color: red"
```

Example as array:
```json
[
  "background-color: red",
  "color: blue"
]
```

Example as object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>hoverable</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`true`</td>
<td>Table row hover</td>
</tr>
<tr>
<td><strong>hover-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
  "group-hover:bg-gray-200"
]
```
</td>
<td>

Example as String

```json
"group-hover:font-bold group-hover:text-blue-400"
```


Example as Array
```json
[
  "group-hover:font-bold",
  "group-hover:text-blue-400"
]
```

Example as Object
```json
{
  "group-hover:font-bold": true,
  "group-hover:text-blue-400": true
}
```

**Note**: *If you use tailwind css please use `group-hover` state*
</td>
</tr>
<tr>
<td><strong>disable-loader</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable table loading message</td>
</tr>
<tr>
<td><strong>disable-skeleton-loader</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable skeleton loader on loading state</td>
</tr>
<tr>
<td><strong>no-data-label</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'No records found.'`</td>
<td> No data label text </td>
</tr>
<td><strong>no-result-label</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'No records matching your criteria'`</td>
<td> No result text </td>
</tr>
</tbody>
</table>

<br><br>

### Checkbox Props

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th align="center">Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><strong>with-select</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Show checkbox on first column of your datatable</td>
</tr>
<tr>
<td><strong>selected-key</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'isSelected'`</td>
<td>
Datatable selected field.
<br><br>

**Note:** *Make sure this field is inside first level of your object otherwise it will return false.*</td>
</tr>
<tr>
<td><strong>checkbox-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
  "rounded-md",
  "w-6",
  "h-6",
]
```
</td>
<td>

Example as String:

```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>checkbox-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```

Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
</tbody>
</table>

<br><br>

### Grid Props

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th align="center">Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><strong>grid</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'responsive'`</td>
<td>

Accepted value: `'responsive'`, `'always'` or `'never'`

`responsive`: Only show grid on tablet or lower

`always`: Always show grid instead of table

`never`: Always show table on all device
</td>
</tr>
<tr>
<td><strong>grid-container-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
  "shadow-lg",
  "p-4",
  "border",
  "border-gray-400",
]
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>grid-container-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>grid-row-count</strong></td>
<td align="center">[ <em>Number, String</em> ]</td>
<td align="center">Optional</td>
<td align="center">

`6`</td>
<td>Numbers of grid column in grid view</td>
</tr>
</tbody>
</table>

<br><br>

### Search Field Props

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th align="center">Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><strong>disable-search</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable search input field</td>
</tr>
<tr>
<td><strong>search-label</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'Search...'`</td>
<td>search input field placeholder</td>
</tr>
<tr>
<td><strong>search-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
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
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>search-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
</tbody>
</table>

<br><br>

### Reload Button Props

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th align="center">Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><strong>disable-reload-button</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable reload button</td>
</tr>
<tr>
<td><strong>reload-button-label</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'Reload'`</td>
<td>Reload button text</td>
</tr>
<tr>
<td><strong>reload-button-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
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
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>reload-button-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
</tbody>
</table>

<br><br>

### Reverse Props
<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th align="center">Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>reverse-head</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`true`</td>
<td>Switch position on search field and reload button container.</td>
</tr>
<tr>
<td><strong>reverse-navigation</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`true`</td>
<td>Switch position on pagination label and navigation buttons container.</td>
</tr>
</tbody>
</table>

<br><br>
### Pagination Props

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th align="center">Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><strong>disable-pagination</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable pagination label, rows per page and navigation buttons</td>
</tr>
<tr>
<td><strong>disable-pagination-label</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable pagination label</td>
</tr>
<tr>
<td><strong>disable-navigation</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable navigation buttons</td>
</tr>
<tr>
<td><strong>disable-goto-page</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable go to page in navigation buttons</td>
</tr>
<tr>
<td><strong>goto-page-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
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
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>goto-page-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>rows-per-page-label</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'Rows per page:'`</td>
<td>Rows per page label</td>
</tr>
<tr>
<td><strong>rows-per-page</strong></td>
<td align="center">[ <em>Number, String</em> ]</td>
<td align="center">Optional</td>
<td align="center">

`10`</td>
<td>Numbers of rows for each page</td>
</tr>
<tr>
<tr>
<td><strong>disable-rows-per-page</strong></td>
<td align="center">[ <em>Boolean</em> ]</td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable row per page options</td>
</tr>
<tr>
<td><strong>rows-per-page-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
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
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>rows-per-page-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>rows-per-page-options</strong></td>
<td align="center"><em>Array</em></td>
<td align="center">Optional</td>
<td align="center">

`[ 10, 20, 50 ]`</td>
<td>Rows per page options</td>
</tr>
<tr>
<td><strong>disable-first-page-button</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable first page button in navigation buttons</td>
</tr>
<tr>
<td><strong>first-page-button-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
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
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>first-page-button-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>disable-last-page-button</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable last page button in navigation buttons</td>
</tr>
<tr>
<td><strong>last-page-button-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
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
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>last-page-button-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>disable-previous-page-button</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable previous page button in navigation buttons</td>
</tr>
<tr>
<td><strong>previous-page-button-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
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
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>previous-page-button-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>disable-next-page-button</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Disable next page button in navigation buttons</td>
</tr>
<tr>
<td><strong>next-page-button-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td>

```json
[
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
```
</td>
<td>

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>next-page-button-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
</tbody>
</table>

<br><br>

### Columns Props
> This props used to render columns and basic formating value, you can modified inside <strong>columns</strong>

```js
export default {
  ...
  data() {
    return {
      columns: [
        {
          uniqid: 'username',
          label: 'Username',
          field: 'username', // or use (row) => row.user.username
          visible: true,
          sortable: true,
          sortOrder: 'asc',
          align: 'center',
          format: (val, row) => `Username: ${val}`
          headerClass: 'py-4',
          classes: [
            'py-2',
            'font-bold',
            'text-blue-600'
          ],
        },
        {
          uniqid: 'fullName',
          label: 'Full Name',
          field: 'firstName',
          format: (val, row) => `${val} ${row.lastName}`
          headerClass: {
            'py-4': true
          },
        },
        ...
      ]
    }
  }
}
```

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th align="center">Type</th>
<th align="center">Mandatory</th>
<th align="center">Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><strong>uniqid</strong></td>
<td align="center"><em>String</em></td>
<td align="center"><strong>Yes</strong></td>
<td align="center"></td>
<td>Table header, cell and grid unique identifier.<br>This props will used for naming slot for each header, cell and grid.</td>
</tr>
<tr>
<td><strong>label</strong></td>
<td align="center"><em>String</em></td>
<td align="center"><strong>Yes</strong></td>
<td align="center"></td>
<td>Label for header column</td>
</tr>
<tr>
<td><strong>field</strong></td>
<td align="center">[ <em>String, Function</em> ]</td>
<td align="center">Optional</td>
<td align="center">

```json
(row) => row.id
```
</td>
<td>

Row Object property to determine value for this column or function which maps to the required property.<br>You can use

```json
"field": "foo"

// or as function

"field": (row) => row.user.foo
```
</td>
</tr>
<tr>
<td><strong>visible</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`true`</td>
<td>This props will make column visible or not</td>
</tr>
<tr>
<td><strong>sortable</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td>Make this column sortable and to data query sent to your server</td>
</tr>
<tr>
<td><strong>sort-order</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'asc'`</td>
<td>

Sort column sort order.<br>Accept: `'asc'` or `'desc'`</td>
</tr>
<tr>
<td><strong>align</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`'left'`</td>
<td>

Horizontal alignment of cells in this column.<br>Accept: `'left'`, `'center'` or `'right'`</td>
</tr>
<tr>
<td><strong>format</strong></td>
<td align="center"><em>Function</em></td>
<td align="center">Optional</td>
<td align="center">

```json
(val, row) => `${val}`
```
</td>
<td>Function to format your data. Accept two arguments `val` and `row`. <br>`val` contain value from `row` based on <strong>field</strong> props.</td>
</tr>
<tr>
<td><strong>header-class</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Class for `<th>` tag

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>header-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Style for `<th>` tag

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>classes</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Class for `<td>` tag

Example as String:
```json
"font-bold text-blue-400"
```
Example as Array:
```json
[
  "font-bold",
  "text-blue-400"
]
```
Example as Object:
```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>styles</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

Style for `<td>` tag

Example as String:
```json
"background-color: red"
```
Example as Array:
```json
[
  "background-color: red",
  "color: blue"
]
```
Example as Object:
```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
</tbody>
</table>

<br><br>

## Slots

<table width="100%">
<thead>
<tr>
<th>title</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Title of your table

</td>
</tr>
<tr>
<td>

```html
<template #title>
  Insert your title here!
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>before.data-table</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to add content before the table

</td>
</tr>
<tr>
<td>

```html
<template #before.data-table>
  <span>Text Before Table</span>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>after.data-table</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to add content after the table

</td>
</tr>
<tr>
<td>

```html
<template #after.data-table>
  <span>Text After Table</span>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>before.search</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used if you want to add content left of search field on tablet and desktop and top of search field on mobile

</td>
</tr>
<tr>
<td>

```html
<template #before.search>
  This will render on the left of search field
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>icon.search</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Slot for search field icon

</td>
</tr>
<tr>
<td>

```html
<template #icon.search>
  <svg class="w-4 h-4 absolute left-2.5 top-3.5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>
</template>
```

</td>
</tr>
</tbody>
</table>
<table width="100%">
<thead>
<tr>
<th>after.search</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used if you want to add content right of search field on tablet and desktop and bottom of search field on mobile

</td>
</tr>
<tr>
<td>

```html
<template #after.search>
  This will render on the right of search field
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>before.reload-button</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used if you want to add content left of reload button on tablet and desktop and top of reload button on mobile

</td>
</tr>
<tr>
<td>

```html
<template #before.reload-button>
  This will render on the left of reload button
</template>
```

</td>
</tr>
</tbody>
</table>
<table width="100%">
<thead>
<tr>
<th>label.reload-button</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Slot to customize label reload button

</td>
</tr>
<tr>
<td>

```html
<template #label.reload-button>
  <div class="flex flex-row items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="current-stroke stroke-2 text-white" viewBox="0 0 16 16">
      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
      <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
    </svg>
    <span>Refresh Data</span>
  </div>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>after.reload-button</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used if you want to add content right of reload button on tablet and desktop and bottom of reload button on mobile

</td>
</tr>
<tr>
<td>

```html
<template #after.reload-button>
  This will render on the right of reload button
</template>
```

</td>
</tr>
</tbody>
</table>
<table width="100%">
<thead>
<tr>
<th>label.no-record</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize text when no data found in table

</td>
</tr>
<tr>
<td>

```html
<template #label.no-record>
  <p class="font-bold text-lg text-red-600">Oops, sorry we cannot find any matching data.</p>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>label.no-result</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to render no result label

</td>
</tr>
<tr>
<td>

```html
<template #label.no-result>
  <span>labelNoResult</span>
</template>
```
</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>loader</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize loader inside table

</td>
</tr>
<tr>
<td>

```html
<template #loader>
  <div class="flex flex-row p-4 bg-white items-center shadow-md">
    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <span class="text-lg">Loading</span>
  </div>
</template>
```

</td>
</tr>
</tbody>
</table>
<table width="100%">
<thead>
<tr>
<th>before.pagination-label</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used if you want to add content left of pagination label on tablet and desktop and top of pagination label on mobile

</td>
</tr>
<tr>
<td>

```html
<template #before.pagination-label>
  This will render on the left of pagination label
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>label.pagination</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to show count of data in table.

`from` used to show first data,

`to` used to show last data, and

`total` used to show total data
</td>
</tr>
<tr>
<td>

```html
<template #label.pagination="{ from, to, total }">
  <span class="text-bold">Showing {{ from }} - {{ to }} from total {{ total }} data.</span>
</template>
```

</td>
</tr>
</tbody>
</table>
<table width="100%">
<thead>
<tr>
<th>after.pagination-label</th>
</tr>
</thead>
<tbody>
<tr>
<td>


Used if you want to add content right of pagination label on tablet and desktop and bottom of pagination label on mobile

</td>
</tr>
<tr>
<td>

```html
<template #after.pagination-label>
  This will render on the right of pagination label
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>before.navigation</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used if you want to add content left of navigation button on tablet and desktop and top of navigation button on mobile

</td>
</tr>
<tr>
<td>

```html
<template #before.navigation>
  This will render on the left of navigation bar
</template>
```

</td>
</tr>
</tbody>
</table>
<table width="100%">
<thead>
<tr>
<th>	after.navigation</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used if you want to add content right of navigation button on tablet and desktop and bottom of navigation button on mobile

</td>
</tr>
<tr>
<td>

```html
<template #	after.navigation>
  This will render on the right of navigation bar
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>label.rows-per-page</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize text data per page.

</td>
</tr>
<tr>
<td>

```html
<template #label.rows-per-page>
  <span class="text-bold">Data per page:</span>
</template>
```

</td>
</tr>
</tbody>
</table>
<table width="100%">
<thead>
<tr>
<th>icon.navigation.first-page-button</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize icon inside first page navigation button

</td>
</tr>
<tr>
<td>

```html
<template #icon.navigation.first-page-button>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="stroke-current stroke-2" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
  </svg>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>icon.navigation.previous-page-button</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize icon inside previous page navigation button

</td>
</tr>
<tr>
<td>

```html
<template #icon.navigation.previous-page-button>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="stroke-current stroke-2" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>
</template>
```

</td>
</tr>
</tbody>
</table>
<table width="100%">
<thead>
<tr>
<th>icon.navigation.next-page-button</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize icon inside next page navigation button

</td>
</tr>
<tr>
<td>

```html
<template #icon.navigation.next-page-button>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="stroke-current stroke-2" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>icon.navigation.last-page-button</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize icon inside last page navigation button

</td>
</tr>
<tr>
<td>

```html
<template #icon.navigation.last-page-button>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="stroke-current stroke-2" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
  </svg>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>footer</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Footer content of your table

</td>
</tr>
<tr>
<td>

```html
<template #footer>
  Insert your footer here!
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>icon.ascending</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize icon for ascending icon if you used sortable

</td>
</tr>
<tr>
<td>

```html
<template #icon.ascending>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="current-stroke stroke-2" viewBox="0 0 16 16">
    <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
  </svg>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>icon.descending</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize icon for descending icon if you used sortable

</td>
</tr>
<tr>
<td>

```html
<template #icon.descending>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="current-stroke stroke-2" viewBox="0 0 16 16">
    <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
  </svg>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>table.row.prepend</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to prepend data in each rows of table

</td>
</tr>
<tr>
<td>

```html
<template #table.row.prepend>
  <tr>
    <td>No</td>
    <td>Name</td>
    <td>Phone Number</td>
    <td>Address</td>
  </tr>
</template>
```
</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>table.row.append</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to append data in each rows of table

</td>
</tr>
<tr>
<td>

```html
<template #table.row.append>
  <tr>
    <td>No</td>
    <td>Name</td>
    <td>Phone Number</td>
    <td>Address</td>
  </tr>
</template>
```
</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>table.row.skeleton</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to render skeleton loader per rows of table

</td>
</tr>
<tr>
<td>

```html
<template #table.row.skeleton>
  <div class="mx-auto animate-pulse h-6 w-6 bg-blue-400 rounded" />
</template>
```
</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>table.cell.skeleton.checkbox</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to render skeleton loader checkbox in cell of table

</td>
</tr>
<tr>
<td>

```html
<template #table.cell.skeleton.checkbox>
  <div class="mx-auto animate-pulse h-6 w-6 bg-blue-400 rounded" />
</template>
```
</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>grid.content.header.checkbox</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize checkbox label inside grid header

</td>
</tr>
<tr>
<td>

```html
<template #grid.content.header.checkbox>
  <span class="text-lg font-bold">
    Selected
  </span>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>grid.prepend</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to prepend content in grid view

</td>
</tr>
<tr>
<td>

```html
<template #grid.prepend">
  <div class="flex flex-col space-y-2">
      Prepend Text
  </div>
</template>
```

```html
<template #grid.prepend="{ item }">
  <div class="flex flex-col space-y-2">
    <span class="text-lg font-bold">
      Prepend List
    </span>
    <span class="text-lg font-bold">
    {{ item.carlicense }}
    </span>
  </div>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>grid.append</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to append content in grid view

</td>
</tr>
<tr>
<td>

```html
<template #grid.append">
  <div class="flex flex-col space-y-2">
      Append Data
  </div>
</template>
```

```html
<template #grid.append="{ item }">
  <div class="flex flex-col space-y-2">
    <span class="text-lg font-bold">
      Append List
    </span>
    <span class="text-lg font-bold">
    {{ item.carlicense }}
    </span>
  </div>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>grid.skeleton.container</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to render skeleton loader at container grid view

</td>
</tr>
<tr>
<td>

```html
<template #grid.skeleton.container>
  <div class="mx-auto animate-pulse h-6 w-6 bg-blue-400 rounded" />
</template>
```
</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>grid.skeleton.body.checkbox</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to render skeleton loader at checkbox grid view

</td>
</tr>
<tr>
<td>

```html
<template #grid.skeleton.body.checkbox>
  <div class="mx-auto animate-pulse h-6 w-6 bg-blue-400 rounded" />
</template>
```
</td>
</tr>
</tbody>
</table>

## Dynamic Slots

<table width="100%">
<thead>
<tr>
<th>table.cell.header.[uniqid]</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize label in table header for spesific cell identified by `uniqid`

`uniqid` is required as identity of cell header it must be unique, type of `uniqid` is string, `uniqid` based on passed data from controller

</td>
</tr>
<tr>
<td>

```html
<template #table.cell.header.fullName="{ label }">
  <h1 class="text-blue-400">{{ label }}</h1>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>table.cell.content.[uniqid]</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize cell value in table cell for spesific cell identified by `uniqid`

`uniqid` is required as identity of cell inside table it must be unique, type of `uniqid` is string, `uniqid` based on passed data from controller

This slot has 2 arguments:

`value` is data value has been formated.

`row` is data object

</td>
</tr>
<tr>
<td>

```html
<template #table.cell.content.fullName="{ value, row }">
  <p class="text-blue-600 leading-5">Formatted Value: {{ value }}</p>
  <p class="text-blue-600 leading-5">Unformatted Value: {{ row.first_name }} {{ row.last_name }}</p>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>grid.content.header.[uniqid]</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize label for spesific header identified by `uniqid`

`uniqid` is required as identity of cell inside table it must be unique, type of `uniqid` is string, `uniqid` based on passed data from controller

</td>
</tr>
<tr>
<td>

```html
<template #grid.content.header.fullName="{ label }">
  <h1 class="text-blue-400">{{ label }}</h1>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>grid.content.body.[uniqid]</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to customize grid value for spesific row identified by `uniqid`

`uniqid` is required as identity of cell inside table it must be unique, type of `uniqid` is string, `uniqid` based on passed data from controller

This slot has 2 arguments:

`value` is data value has been formated.

`row` is data object

</td>
</tr>
<tr>
<td>

```html
<template #grid.content.body.fullName="{ value, row }">
  <p class="text-blue-600 leading-5">Formatted Value: {{ value }}</p>
  <p class="text-blue-600 leading-5">Unformatted Value: {{ row.first_name }} {{ row.last_name }}</p>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>table.cell.skeleton.[col.uniqid]</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to render skeleton loader for spesific column identified by `col.uniqid`

`col.uniqid` is required as identity of column inside table it must be unique, type of `uniqid` is string, `uniqid` based on passed data from controller

</td>
</tr>
<tr>
<td>

```html
<template #table.cell.skeleton.carlicense="{ column }">
  <span>{{ column.label }}</span>
</template>
```

</td>
</tr>
</tbody>
</table>

<table width="100%">
<thead>
<tr>
<th>grid.skeleton.body.[col.uniqid]</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Used to render skeleton loader for spesific grid column identified by `col.uniqid`

`col.uniqid` is required as identity of column inside table it must be unique, type of `uniqid` is string, `uniqid` based on passed data from controller

</td>
</tr>
<tr>
<td>

```html
<template #grid.skeleton.body.carlicense="{ column }">
  <span>{{ column.label }}</span>
</template>
```

</td>
</tr>
</tbody>
</table>

<br><br>

## Sent Request

Example sent request to your server:

```json
[
  "search" => NULL,
  "page" => "1",
  "per_page" => "10",
  "sortOrder" => [
    [
      "column" => "first_name",
      "order" => "asc",
    ],
    [
      "column" => "email",
      "order" => "desc",
    ],
  ],
] 
```

If you add `:query='[ "foo=bar", "hello=world" ]'` to your **query** props, it will send

```json
[
  "search" => NULL,
  "page" => "1",
  "per_page" => "10",
  "sortOrder" => [
    [
      "column" => "carlicense",
      "order" => "asc",
    ],
    [
      "column" => "terid",
      "order" => "asc",
    ],
  ],
  "foo" => "bar",
  "hello" => "world",
]
```

<br><br>

## Laravel Response

Expected Response example from your server:

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@example.com",
            "phone": "00990025196",
            "created_at": "2021-06-25 08:37:09",
            "updated_at": "2021-06-25 08:37:09",
            "isSelected": true,
            ...
        },
        ...
    ],
    "first_page_url": "http://example.com/table?page=1",
    "from": 1,
    "last_page": 17,
    "last_page_url": "http://example.com/table?page=17",
    "next_page_url": "http://example.com/table?page=2",
    "path": "http://example.com/table",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 163

}
```

**Notes!!**

You may use the `withQueryString` method if you would like to append all of the current request's query string values to the pagination links.

```php
$users = User::paginate($request->input('per_page'))->withQueryString();
```

<br><br>

# License
[MIT](https://github.com/razztyfication/laravel-vue-datatable/blob/master/LICENSE.md)
