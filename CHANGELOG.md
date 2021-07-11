# [v1.0.1](https://github.com/razztyfication/laravue-datatable/tree/master)

- Initial Release
- Change name from `laravel-vue-datatable` to `laravel-vue-datatables`

# [v1.0.0](https://github.com/razztyfication/laravel-vue-datatable/tree/v1.0.0)

- First Release
- Rename Slots Name and Add New Slots
- Modified Props Name and Add New Props

### Slots

| Before | After | Status |
| --- | --- | --- |
| afterButton | after.reload-button | MODIFIED |
| afterNavigation | after.navigation | MODIFIED |
| afterPaginationLabel | after.pagination-label | MODIFIED |
| afterSearch | after.search | MODIFIED |
| beforeButton | before.reload-button | MODIFIED |
| beforeNavigation | before.navigation | MODIFIED |
| beforePaginationLabel | before.pagination-label | MODIFIED |
| beforeSearch | before.search | MODIFIED |
| cell-body-[cell.uniqid] | table.cell.content.[uniqid] | MODIFIED |
| cell-header-[cell.uniqid] | table.cell.header.[uniqid] | MODIFIED |
| grid-body-[cell.uniqid] | grid.content.body.[cell.uniqid] | MODIFIED |
| grid-header-[cell.uniqid]  | grid.content.header.[cell.uniqid] | MODIFIED |
| iconAscending | icon.ascending | MODIFIED |
| iconDescending | icon.descending | MODIFIED |
| iconFirstNavBtn | icon.navigation.first-page-button | MODIFIED |
| iconLastNavBtn | icon.navigation.last-page-button | MODIFIED |
| iconNextNavBtn | icon.navigation.next-page-button | MODIFIED |
| iconPrevNavBtn | icon.navigation.previous-page-button | MODIFIED |
| iconSearch | icon.search | MODIFIED |
| labelCheckboxGridHeader | grid.content.header.checkbox | MODIFIED |
| labelNoRecord | label.no-record | MODIFIED |
| labelReloadBtn | label.reload-button | MODIFIED |
| labelRowsPerPage | label.rows-per-page | MODIFIED |
| paginationLabel | label.pagination | MODIFIED |
| | after.data-table | NEW |
| | before.data-table | NEW |
| | grid.append | NEW |
| | grid.prepend | NEW |
| | grid.skeleton.body.[col.uniqid] | NEW |
| | grid.skeleton.body.checkbox | NEW |
| | grid.skeleton.container | NEW |
| | label.no-result | NEW |
| | table.cell.skeleton.[col.uniqid] | NEW |
| | table.cell.skeleton.checkbox | NEW |
| | table.row.append | NEW |
| | table.row.prepend | NEW |
| | table.row.skeleton | NEW |

### Props

| Before | After | Status |
| --- | --- | --- |
| data-uri | route | MODIFIED |
| disable-goto-first-nav | disable-first-page-button | MODIFIED |
| disable-goto-last-nav | disable-last-page-button | MODIFIED |
| disable-goto-next-nav | disable-next-page-button | MODIFIED |
| disable-goto-prev-nav | disable-previous-page-button | MODIFIED |
| disable-refresh-btn | disable-reload-button | MODIFIED |
| goto-first-nav-class | first-page-button-class | MODIFIED |
| goto-first-nav-style | first-page-button-style | MODIFIED |
| goto-last-nav-class | last-page-button-class | MODIFIED |
| goto-last-nav-style | last-page-button-style | MODIFIED |
| goto-next-nav-class | next-page-button-class | MODIFIED |
| goto-next-nav-style | next-page-button-style | MODIFIED |
| goto-prev-nav-class | previous-page-button-class | MODIFIED |
| goto-prev-nav-style | previous-page-button-style | MODIFIED |
| header-class | thead-class | MODIFIED |
| header-style | thead-style | MODIFIED |
| loader | disable-loader | MODIFIED |
| refresh-btn-class | reload-button-class | MODIFIED |
| refresh-btn-label | reload-button-label | MODIFIED |
| refresh-btn-style | reload-button-style | MODIFIED |
| | disable-rows-per-page | NEW |
| | disable-skeleton-loader | NEW |
| | no-result-label | NEW |
| | reverse-head | NEW |
| | reverse-navigation | NEW |