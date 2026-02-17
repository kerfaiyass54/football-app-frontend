import { Component } from '@angular/core';
import {UserCardsComponent} from "../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
    selector: 'app-location-management',
  imports: [
    UserCardsComponent

  ],
    templateUrl: './location-management.component.html',
    styleUrl: './location-management.component.css'
})
export class LocationManagementComponent {

  labels: any[] = ['All' , 'Africa' , 'Asia' , 'Europe' ,'America' ,'South america']

}
