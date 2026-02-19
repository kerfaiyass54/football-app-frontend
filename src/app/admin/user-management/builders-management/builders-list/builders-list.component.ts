import { Component } from '@angular/core';
import {CustomListComponent} from "../../../../Shared/shared-ui/custom-list/custom-list.component";
import {TableColumn} from "../../../../components/generic-table/generic-table.component";
import {PreviousButtonComponent} from "../../../../components/buttons/previous-button/previous-button.component";
import {BUILDER_TABLE_COLUMNS} from "../../../../core/constants/builder.constants";

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

  columns: TableColumn<any>[] = BUILDER_TABLE_COLUMNS;

  data: any[] = [

  ];

}
