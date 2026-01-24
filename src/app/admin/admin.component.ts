import { Component } from '@angular/core';
import {NavbarElement} from "../Models/navbar-element";
import {NavBarComponent} from "../Shared/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-admin',
    imports: [
        NavBarComponent,
        RouterOutlet
    ],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css'
})
export class AdminComponent {



}
