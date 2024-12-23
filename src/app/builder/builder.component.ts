import { Component } from '@angular/core';
import {NavBarComponent} from "../Shared/nav-bar/nav-bar.component";
import {NavbarElement} from "../Models/navbar-element";

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  navBarElements: NavbarElement[]=[];

}
