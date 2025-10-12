import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {NavbarElement} from "../../Models/navbar-element";
import {RouterLink} from "@angular/router";
import {KeycloakService} from "../services/keycloak.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    RouterLink,
    NgForOf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit{


  constructor(private authService: KeycloakService) {
  }

  ngOnInit() {

  }

  @Input() element: NavbarElement[] = [];


  isScrolled = false;
  isMenuOpen = false;
  language = 'EN';



  changeLanguage(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.language = select.value;
  }

  logout(): void {
    this.authService.logout();
  }



}
