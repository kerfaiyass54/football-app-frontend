import { Component } from '@angular/core';
import {NavBarComponent} from "../Shared/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";
import {NavbarElement} from "../Models/navbar-element";

@Component({
    selector: 'app-player',
    imports: [
        NavBarComponent,
        RouterOutlet
    ],
    templateUrl: './player.component.html',
    styleUrl: './player.component.css'
})
export class PlayerComponent {
  navBarElements: NavbarElement[] = [{
    name:'Matches view',
    link:'/player/matches'
  },
    {
      name:'Ratings view',
      link:'/player/ratings'
    },
    {
      name:'Trainings view',
      link:'/player/trainings'
    },
    {
      name:'Contracts management',
      link:'/player/ratings'
    },
    {
      name:'Stats view',
      link:'/player/stats'
    },
    {
      name:'Team information',
      link:'/player/team'
    }];

}
