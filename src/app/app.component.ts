import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./Shared/nav-bar/nav-bar.component";
import {FooterComponent} from "./Shared/footer/footer.component";
import {NavbarElement} from "./Models/navbar-element";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-app-front';


}
