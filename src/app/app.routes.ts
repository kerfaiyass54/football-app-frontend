import { Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {BuilderComponent} from "./builder/builder.component";
import {ManagerComponent} from "./manager/manager.component";
import {OrganizerComponent} from "./organizer/organizer.component";
import {PlayerComponent} from "./player/player.component";
import {SupporterComponent} from "./supporter/supporter.component";
import {TeamComponent} from "./team/team.component";

export const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children:[]
  },
  {
    path:'builder',
    component: BuilderComponent,
    children:[]
  },{
    path:'manager',
    component: ManagerComponent,
    children:[]
  },{
    path:'organizer',
    component: OrganizerComponent,
    children:[]
  },{
    path:'player',
    component: PlayerComponent,
    children:[]
  },{
    path:'supporter',
    component: SupporterComponent,
    children:[]
  },{
    path:'team',
    component: TeamComponent,
    children:[]
  },
];
