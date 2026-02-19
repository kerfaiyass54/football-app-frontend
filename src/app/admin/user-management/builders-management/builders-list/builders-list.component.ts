import { Component } from '@angular/core';
import {CustomListComponent} from "../../../../Shared/shared-ui/custom-list/custom-list.component";
import {TableColumn} from "../../../../components/generic-table/generic-table.component";
import {PreviousButtonComponent} from "../../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-builders-list',
  imports: [
    CustomListComponent,
    PreviousButtonComponent
  ],
  templateUrl: './builders-list.component.html',
  styleUrl: './builders-list.component.css',
})
export class BuildersListComponent {

  columns: TableColumn<any>[] = [
    { key: 'id', label: 'ID', sortable: true, type: 'text' },
    { key: 'name', label: 'Name', sortable: true, type: 'text' },
    { key: 'country', label: 'Country', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeConfig: {
        classMap: {
          active: 'bg-green-100 text-green-800',
          inactive: 'bg-red-100 text-red-800',
        },
      },
    },
    {
      key: 'verified',
      label: 'Verified',
      type: 'icon',
      iconConfig: {
        classMap: {
          true: 'fa fa-check text-green-500',
          false: 'fa fa-times text-red-500',
        },
      },
    },
  ];

  data: any[] = [
    { id: 1, name: 'any One', country: 'Tunisia', status: 'active', verified: true },
    { id: 2, name: 'any Two', country: 'France', status: 'inactive', verified: false },
    { id: 3, name: 'any Three', country: 'Germany', status: 'active', verified: true },
  ];

}
