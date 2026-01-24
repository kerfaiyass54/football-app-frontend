import { Component, Input, Signal, signal } from '@angular/core';
import {Table, TableModule} from 'primeng/table';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";

export interface DataTableColumn {
  field: string;
  header: string;
  style?: string;
  filter?: {
    type: 'text' | 'numeric' | 'date' | 'boolean';
    matchMode?: string;
  };
}

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  imports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule
  ]

})
export class TableComponent<T> {
  @Input({ required: true }) value!: Signal<T[]>;
  @Input({ required: true }) columns!: DataTableColumn[];

  @Input() dataKey = 'id';
  @Input() rows = 10;
  @Input() paginator = true;
  @Input() globalFilterFields: string[] = [];

  @Input() loading: Signal<boolean> = signal(false);

  clear(table: Table) {
    table.clear();
  }

  onGlobalFilter(event: Event, table: Table) {
    const input = event.target as HTMLInputElement | null;
    table.filterGlobal(input?.value ?? '', 'contains');
  }

  resolveField(obj: any, field: string): unknown {
    return field.split('.').reduce((acc, part) => acc?.[part], obj);
  }
}
