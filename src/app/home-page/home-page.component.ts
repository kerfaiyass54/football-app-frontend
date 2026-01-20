import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../Shared/services/keycloak.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home-page',
    imports: [],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  roles:string[] = [];

  constructor(private keyloak: KeycloakService, private router: Router) {
  }


  ngOnInit() {
    this.roles = this.keyloak.getRoles();
    console.log(this.roles);
    this.access();}

  access(){

    if(this.roles.includes('Admin')){
      this.router.navigate(['/admin']);
    }
    else if(this.roles.includes('Supporter')){
      this.router.navigate(['/supporter']);
    }

    else if(this.roles.includes('Team')){
      this.router.navigate(['/team']);
    }

    else if(this.roles.includes('Player')){
      this.router.navigate(['/player']);
    }
    else if(this.roles.includes('Organizer')){
      this.router.navigate(['/organizer']);
    }
    else if(this.roles.includes('Referee')){
      this.router.navigate(['/referee']);
    }
    else if(this.roles.includes('Manager')){
      this.router.navigate(['/manager']);
    }else if(this.roles.includes('Builder')){
      this.router.navigate(['/builder']);
    }
    else{
      this.router.navigate(['/not-authorized']);
    }
  }
}
