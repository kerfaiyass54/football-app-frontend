import { Component } from '@angular/core';
import {NavBarComponent} from "../Shared/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";
import {NavbarElement} from "../Models/navbar-element";

@Component({
  selector: 'app-manager',
  standalone: true,
    imports: [
        NavBarComponent,
        RouterOutlet
    ],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  navBarElements: NavbarElement[]=[
    {
      name:'Careers information',
      link:'/manager/career'
    },
    {
      name:'Tournaments information',
      link:'/manager/tourns'
    },{
      name:'Matches schedule',
      link:'/manager/match'
    },{
      name:'Players management',
      link:'/manager/players'
    },{
      name:'Injuries information',
      link:'/manager/injuries'
    },{
      name:'Team information',
      link:'/manager/team'
    },
  ];

}
