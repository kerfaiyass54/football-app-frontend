import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isMenuOpen = false;
  openDropdown: number | null = null;
  accountOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.openDropdown = null;
    this.accountOpen = false;
  }

  toggleDropdown(index: number) {
    this.openDropdown = this.openDropdown === index ? null : index;
    this.accountOpen = false;
  }

  toggleAccount() {
    this.accountOpen = !this.accountOpen;
    this.openDropdown = null;
  }

  logout() {
    console.log('Logging out...');
  }
}
