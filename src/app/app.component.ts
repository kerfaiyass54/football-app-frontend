import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {NavBarComponent} from "./Shared/nav-bar/nav-bar.component";
import {FooterComponent} from "./Shared/footer/footer.component";
import {KeycloakService} from "./Shared/services/keycloak.service";


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-app-front';



}
