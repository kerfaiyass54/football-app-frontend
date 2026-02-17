import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-supporters-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './supporters-management.component.html',
  styleUrl: './supporters-management.component.css',
})
export class SupportersManagementComponent implements OnInit{

  links: any[] = [];

  ngOnInit() {
  }
}
