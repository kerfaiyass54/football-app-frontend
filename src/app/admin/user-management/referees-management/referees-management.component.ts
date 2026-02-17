import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-referees-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './referees-management.component.html',
  styleUrl: './referees-management.component.css',
})
export class RefereesManagementComponent implements OnInit{

  links: any[] = [];

  ngOnInit() {
  }

}
