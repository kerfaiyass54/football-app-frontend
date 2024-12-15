import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {NavbarElement} from "../../Models/navbar-element";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit{

   @Input() element: NavbarElement[] = [];

  constructor() {

  }

  ngOnInit() {

  }


}
