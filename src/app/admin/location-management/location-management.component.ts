import { Component } from '@angular/core';
import { UserCardsComponent } from "../../Shared/shared-ui/user-cards/user-cards.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-location-management',
  standalone: true,
  imports: [
    UserCardsComponent,
    RouterLink
  ],
  templateUrl: './location-management.component.html',
  styleUrl: './location-management.component.css'
})
export class LocationManagementComponent {

  labels = [
    {
      title: 'All',
      link: '/admin/locations-list'
    },
    {
      title: 'AFRICA',
      link: '/admin/list-location/africa'
    },
    {
      title: 'ASIA',
      link: '/admin/list-location/asia'
    },
    {
      title: 'EUROPE',
      link: '/admin/list-location/europe'
    },
    {
      title: 'AMERICA',
      link: '/admin/list-location/america'
    },
    {
      title: 'SOUTH_AMERICA',
      link: '/admin/list-location/south-america'
    }
  ];

}
