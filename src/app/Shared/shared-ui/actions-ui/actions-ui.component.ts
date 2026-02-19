import {Component, computed, signal} from '@angular/core';
import {GenericTableComponent, TableColumn} from "../../../components/generic-table/generic-table.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-actions-ui',
  imports: [
    FormsModule,
    GenericTableComponent
  ],
  templateUrl: './actions-ui.component.html',
  styleUrl: './actions-ui.component.css',
})
export class ActionsUiComponent {
  searchTerm = signal('');

  // Selected rows
  selectedUsers = signal<any[]>([]);

  // Data
  users: any[] = [
    { id: 1, name: 'John Doe', email: 'john@mail.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@mail.com', role: 'any' },
    { id: 3, name: 'Mike Brown', email: 'mike@mail.com', role: 'Manager' }
  ];

  columns: TableColumn<any>[] = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', sortable: true }
  ];

  // Filtered data (external search)
  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.users;

    return this.users.filter(u =>
      Object.values(u).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });


  onSelectionChange(users: any[]) {
    this.selectedUsers.set(users);
  }

  seeDetails() {
    const user = this.selectedUsers()[0];
    if (!user) return;

    console.log('Selected user:', user);
  }

}
