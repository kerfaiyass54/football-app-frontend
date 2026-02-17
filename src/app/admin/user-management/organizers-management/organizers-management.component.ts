import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-organizers-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './organizers-management.component.html',
  styleUrl: './organizers-management.component.css',
})
export class OrganizersManagementComponent implements OnInit{

  links: any[] = [];

  ngOnInit() {
  }
}
