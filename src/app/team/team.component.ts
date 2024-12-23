import { Component } from '@angular/core';
import {NavBarComponent} from "../Shared/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";
import {NavbarElement} from "../Models/navbar-element";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  navBarElements: NavbarElement[] = [
    {
      name:'Players view',
      link:'/team/players'
    },{
      name:'Matches view',
      link:'/team/matches'
    },{
      name:'Tournaments view',
      link:'/team/tourns'
    },{
      name:'Transfers management',
      link:'/team/transfer'
    },{
      name:'Manager view',
      link:'/team/manager'
    },
  ];

}
