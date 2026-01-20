import { Component } from '@angular/core';
import {NavBarComponent} from "../Shared/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";
import {NavbarElement} from "../Models/navbar-element";

@Component({
    selector: 'app-supporter',
    imports: [
        NavBarComponent,
        RouterOutlet
    ],
    templateUrl: './supporter.component.html',
    styleUrl: './supporter.component.css'
})
export class SupporterComponent {
  navBarElements: NavbarElement[]=[
    {
      name:'Location management',
      link:'/supporter/location'
    },
    {
      name:'Matches schedule',
      link:'/supporter/matches'
    },{
      name:'Tickets buying',
      link:'/supporter/tickets'
    },
  ];

}
