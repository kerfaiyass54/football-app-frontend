import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-builders-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './builders-management.component.html',
  styleUrl: './builders-management.component.css',
})
export class BuildersManagementComponent implements OnInit{

  links: any[] = [];

  ngOnInit() {
  }

}
