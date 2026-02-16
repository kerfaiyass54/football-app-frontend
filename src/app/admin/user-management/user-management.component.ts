import { Component } from '@angular/core';

@Component({
    selector: 'app-user-management',
    imports: [],
    templateUrl: './user-management.component.html',
    styleUrl: './user-management.component.css'
})
export class UserManagementComponent {

  labels: any[] = ['Players','Managers','Teams','Organizer','Referee','Supporter','Builder'];


}
