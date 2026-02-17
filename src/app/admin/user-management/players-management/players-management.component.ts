import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-players-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './players-management.component.html',
  styleUrl: './players-management.component.css',
})
export class PlayersManagementComponent implements OnInit {

  links: any [] = [];

  ngOnInit() {
  }


}
