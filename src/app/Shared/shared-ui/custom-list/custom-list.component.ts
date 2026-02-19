import { Component, Input, signal, computed, OnChanges, SimpleChanges } from '@angular/core';
import { GenericTableComponent, TableColumn } from "../../../components/generic-table/generic-table.component";

@Component({
  selector: 'app-custom-list',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './custom-list.component.html',
  styleUrl: './custom-list.component.css',
})
export class CustomListComponent implements OnChanges {

  @Input() cols: TableColumn<any>[] = [];
  @Input() infos: any[] = [];
  @Input() title: string = 'List';

  data = signal<any[]>([]);
  columns: TableColumn<any>[] = [];

  total = computed(() => this.data().length);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['infos']) {
      this.data.set(this.infos);
    }

    if (changes['cols']) {
      this.columns = this.cols;
    }
  }
}
