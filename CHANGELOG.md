# [v1.0.0](https://github.com/razztyfication/laravue-datatable/tree/master)

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
| dataUri | route | MODIFIED |
| disableGotoFirstNav | disableFirstPageButton | MODIFIED |
| disableGotoLastNav | disableLastPageButton | MODIFIED |
| disableGotoNextNav | disableNextPageButton | MODIFIED |
| disableGotoPrevNav | disablePreviousPageButton | MODIFIED |
| disableRefreshBtn | disableReloadButton | MODIFIED |
| gotoFirstNavClass | firstPageButtonClass | MODIFIED |
| gotoFirstNavStyle | firstPageButtonStyle | MODIFIED |
| gotoLastNavClass | lastPageButtonClass | MODIFIED |
| gotoLastNavStyle | lastPageButtonStyle | MODIFIED |
| gotoNextNavClass | nextPageButtonClass | MODIFIED |
| gotoNextNavStyle | nextPageButtonStyle | MODIFIED |
| gotoPrevNavClass | previousPageButtonClass | MODIFIED |
| gotoPrevNavStyle | previousPageButtonStyle | MODIFIED |
| headerClass | theadClass | MODIFIED |
| headerStyle | theadStyle | MODIFIED |
| loader | disableLoader | MODIFIED |
| refreshBtnClass | reloadButtonClass | MODIFIED |
| refreshBtnLabel | reloadButtonLabel | MODIFIED |
| refreshBtnStyle | reloadButtonStyle | MODIFIED |
| | disableRowsPerPage | NEW |
| | disableSkeletonLoader | NEW |
| | noResultLabel | NEW |
| | reverseHead | NEW |
| | reverseNavigation | NEW |