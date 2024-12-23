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
      link:''
    },
    {
      name:'Tournaments information',
      link:''
    },{
      name:'Matches schedule',
      link:''
    },{
      name:'Players management',
      link:''
    },{
      name:'Injuries information',
      link:''
    },{
      name:'Team information',
      link:''
    },
  ];

}
