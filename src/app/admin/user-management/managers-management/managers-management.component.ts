import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-managers-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './managers-management.component.html',
  styleUrl: './managers-management.component.css',
})
export class ManagersManagementComponent implements OnInit{

  links: any[] = [];

  ngOnInit() {
  }
}
