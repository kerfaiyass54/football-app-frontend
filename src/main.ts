import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {KeycloakService} from "./app/Shared/services/keycloak.service";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";

const keycloakService = new KeycloakService();



keycloakService.init().then(() => {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),provideHttpClient(),provideAnimations(),
      { provide: KeycloakService, useValue: keycloakService }
    ]
  }).catch(err => console.error(err));
}).catch(err => console.error('Keycloak init failed', err));
