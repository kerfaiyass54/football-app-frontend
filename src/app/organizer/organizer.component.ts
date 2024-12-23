import { Component } from '@angular/core';
import {NavBarComponent} from "../Shared/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";
import {NavbarElement} from "../Models/navbar-element";

@Component({
  selector: 'app-organizer',
  standalone: true,
    imports: [
        NavBarComponent,
        RouterOutlet
    ],
  templateUrl: './organizer.component.html',
  styleUrl: './organizer.component.css'
})
export class OrganizerComponent {
  navBarElements: NavbarElement[] = [{
      name:'Matches management',
      link:'/organizer/matches'
  },{
    name:'Referees management',
    link:'/organizer/referees'
  },{
    name:'Tournaments editions',
    link:'/organizer/tournament-edition'
  },{
    name:'Tournaments management',
    link:'/organizer/tournaments'
  },{
    name:'Teams management',
    link:'/organizer/teams'
  }];

}
