# laravel-vue-datatable

Laravel datatable wrapper with Vue JS and Tailwind CSS.

<br><br>

- [laravel-vue-datatable](#laravel-vue-datatable)
- [Installation](#installation)
- [Usage](#usage)
  - [v-model](#v-model)
  - [Props](#props)
    - [Table Props](#table-props)
    - [Checkbox Props](#checkbox-props)
    - [Grid Props](#grid-props)
    - [Search Field Props](#search-field-props)
    - [Refresh Button Props](#refresh-button-props)
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
npm install laravel-vue-datatable
```

Then add it to your component files
```html
<!-- MyComponent.vue -->

<template>
  <LaravelTablewind
    data-uri="https:://mydomain.com/table"
    :columns.sync="columns"
  />
</template>

<script>
import LaravelTablewind from 'laravel-vue-datatable';
require('laravel-vue-datatable/dist/laravel-vue-datatable.css');

export default {
  name: 'MyComponent',
  components: {
    LaravelTablewind,
  },
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
  <LaravelTablewind
    data-uri="https:://mydomain.com/table"
    :columns.sync="columns"
  />
</template>
```
Please refer to <a href="#columns-props">**columns**</a> props for detailed usage and explanation.
</td>
</tr>
<tr>
<td><strong>checked</strong></td>
<td align="center"><em>Array</em></td>
<td align="center">Optional</td>
<td>

```html
<template>
  <LaravelTablewind
    data-uri="https:://mydomain.com/table"
    v-model:columns="columns"
    with-select
    :checked.sync="yourCheckedModel"
    selected-key="isSelected"
  />
</template>
```
Used for get selected row if you use <strong>with-select</strong> props.
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
<td><strong>data-uri</strong></td>
<td align="center"><em>String</em></td>
<td align="center"><strong>Yes</strong></td>
<td align="center"></td>
<td>Enter your uri for laravel-vue-datatable get data from.</td>
</tr>
<tr>
<td><strong>query</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center">

`[]`
</td>
<td>
Add your custom query parameters to add it to <strong>data-uri</strong> before get data from your server.

```json
query="foo=bar&hello=world"
```

```json
:query='[ "foo=bar", "hello=world" ]'
```

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
<td></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>header-class</strong></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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
<td></td>
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

```json
"group-hover:font-bold group-hover:text-blue-400"
```

```json
[
  "group-hover:font-bold",
  "group-hover:text-blue-400"
]
```

```json
{
  "group-hover:font-bold": true,
  "group-hover:text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>loader</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`true`</td>
<td></td>
</tr>
<tr>
<td><strong>no-data-label</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'No records found.'`</td>
<td></td>
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
<td></td>
</tr>
<tr>
<td><strong>selected-key</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'isSelected'`</td>
<td>Make sure this field is inside first level of your object otherwise it will return false</td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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

Accept: `'responsive'`, `'always'` or `'never'`</td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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
<td></td>
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
<td></td>
</tr>
<tr>
<td><strong>search-label</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'Search...'`</td>
<td></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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

### Refresh Button Props

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
<td><strong>disable-refresh-btn</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td></td>
</tr>
<tr>
<td><strong>refresh-btn-label</strong></td>
<td align="center"><em>String</em></td>
<td align="center">Optional</td>
<td align="center">

`'Reload'`</td>
<td></td>
</tr>
<tr>
<td><strong>refresh-btn-class</strong></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>refresh-btn-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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
<td></td>
</tr>
<tr>
<td><strong>disable-pagination-label</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td></td>
</tr>
<tr>
<td><strong>disable-navigation</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td></td>
</tr>
<tr>
<td><strong>disable-goto-page</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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
<td></td>
</tr>
<tr>
<td><strong>rows-per-page</strong></td>
<td align="center">[ <em>Number, String</em> ]</td>
<td align="center">Optional</td>
<td align="center">

`10`</td>
<td></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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
<td></td>
</tr>
<tr>
<td><strong>disable-goto-first-nav</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td></td>
</tr>
<tr>
<td><strong>goto-first-nav-class</strong></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>goto-first-nav-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>disable-goto-last-nav</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td></td>
</tr>
<tr>
<td><strong>goto-last-nav-class</strong></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>goto-last-nav-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>disable-goto-prev-nav</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td></td>
</tr>
<tr>
<td><strong>goto-prev-nav-class</strong></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>goto-prev-nav-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

```json
{
  "backgroundColor": "red",
  "fontWeight": "bold"
}
```
</td>
</tr>
<tr>
<td><strong>disable-goto-next-nav</strong></td>
<td align="center"><em>Boolean</em></td>
<td align="center">Optional</td>
<td align="center">

`false`</td>
<td></td>
</tr>
<tr>
<td><strong>goto-next-nav-class</strong></td>
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

```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

```json
{
  "font-bold": true,
  "text-blue-400": true
}
```
</td>
</tr>
<tr>
<td><strong>goto-next-nav-style</strong></td>
<td align="center">[ <em>String, Array, Object</em> ]</td>
<td align="center">Optional</td>
<td align="center"></td>
<td>

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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


```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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


```json
"font-bold text-blue-400"
```

```json
[
  "font-bold",
  "text-blue-400"
]
```

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

```json
"background-color: red"
```

```json
[
  "background-color: red",
  "color: blue"
]
```

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
<th>iconSearch</th>
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
<template #iconSearch>
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
<th>afterSearch</th>
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
<template #afterSearch>
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
<th>beforeButton</th>
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
<template #beforeButton>
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
<th>labelReloadBtn</th>
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
<template #labelReloadBtn>
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
<th>afterButton</th>
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
<template #afterButton>
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
<th>labelNoRecord</th>
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
<template #labelNoRecord>
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
<th>beforePaginationLabel</th>
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
<template #beforePaginationLabel>
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
<th>paginationLabel</th>
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
<template #paginationLabel="{ from, to, total }">
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
<th>afterPaginationLabel</th>
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
<template #afterPaginationLabel>
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
<th>beforeNavigation</th>
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
<template #beforeNavigation>
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
<th>afterNavigation</th>
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
<template #afterNavigation>
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
<th>labelRowsPerPage</th>
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
<template #labelRowsPerPage>
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
<th>iconFirstNavBtn</th>
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
<template #iconFirstNavBtn>
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
<th>iconPrevNavBtn</th>
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
<template #iconPrevNavBtn>
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
<th>iconNextNavBtn</th>
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
<template #iconNextNavBtn>
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
<th>iconLastNavBtn</th>
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
<template #iconLastNavBtn>
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
<th>iconAscending</th>
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
<template #iconAscending>
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
<th>iconDescending</th>
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
<template #iconDescending>
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
<th>labelCheckboxGridHeader</th>
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
<template #labelCheckboxGridHeader>
  <span class="text-lg font-bold">
    Selected
  </span>
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
