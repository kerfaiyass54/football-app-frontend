import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-cards',
  imports: [
    RouterLink
  ],
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.css',
})
export class UserCardsComponent {

  @Input() cardsLinks: any[] = []

}
