import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-cards',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.css',
})
export class UserCardsComponent {

  @Input() cardsLinks: any[] = [];

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
