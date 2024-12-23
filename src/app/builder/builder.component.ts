import { Component } from '@angular/core';
import {NavBarComponent} from "../Shared/nav-bar/nav-bar.component";
import {NavbarElement} from "../Models/navbar-element";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  navBarElements: NavbarElement[]=[
    {
      name:'Fields management',
      link:'/builder/fields'
    },
    {
      name:'Stadiums management',
      link:'/builder/stadiums'
    }
  ];

}
