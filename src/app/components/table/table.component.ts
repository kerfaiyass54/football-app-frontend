import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Order {
  id: number;
  customer: string;
  location: string;
  orderDate: string;
  status: 'Delivered' | 'Cancelled' | 'Shipped' | 'Pending';
  amount: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('rowAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TableComponent {
  orders: Order[] = [
    { id: 1, customer: 'Zinzu Chan Lee', location: 'Seoul', orderDate: '17 Dec, 2022', status: 'Delivered', amount: 128.90 },
    { id: 2, customer: 'Jeet Saru', location: 'Paris', orderDate: '27 Aug, 2023', status: 'Cancelled', amount: 5350.50 },
    { id: 3, customer: 'Sonal Gharti', location: 'Tokyo', orderDate: '14 Mar, 2023', status: 'Shipped', amount: 210.40 },
    { id: 4, customer: 'Alson GC', location: 'New Delhi', orderDate: '25 May, 2023', status: 'Delivered', amount: 149.70 },
    { id: 5, customer: 'Sarita Limbu', location: 'Kathmandu', orderDate: '23 Apr, 2023', status: 'Pending', amount: 399.99 },
    { id: 6, customer: 'Alex Gonley', location: 'London', orderDate: '23 Apr, 2023', status: 'Cancelled', amount: 399.99 },
    { id: 7, customer: 'Sonal Gharti', location: 'Tokyo', orderDate: '14 Mar, 2023', status: 'Shipped', amount: 210.40 }
  ];

  pageSize = 5;
  currentPage = 1;

  sortColumn: keyof Order | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  get totalPages(): number {
    return Math.ceil(this.orders.length / this.pageSize);
  }

  get paginatedOrders(): Order[] {
    let data = [...this.orders];

    if (this.sortColumn) {
      data.sort((a, b) => {
        const valueA = a[this.sortColumn!];
        const valueB = b[this.sortColumn!];

        if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
        if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const start = (this.currentPage - 1) * this.pageSize;
    return data.slice(start, start + this.pageSize);
  }

  sortBy(column: keyof Order): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
