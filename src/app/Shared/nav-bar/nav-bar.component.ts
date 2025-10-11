import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {NavbarElement} from "../../Models/navbar-element";
import {RouterLink} from "@angular/router";

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

export class NavBarComponent{

   @Input() element: NavbarElement[] = [];


  isScrolled = false;
  isMenuOpen = false;
  language = 'EN';



  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.language = select.value;
  }

  logout(): void {
    console.log('Logout');
  }



}
