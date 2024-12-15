import { Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {BuilderComponent} from "./builder/builder.component";
import {ManagerComponent} from "./manager/manager.component";
import {OrganizerComponent} from "./organizer/organizer.component";
import {PlayerComponent} from "./player/player.component";
import {SupporterComponent} from "./supporter/supporter.component";
import {TeamComponent} from "./team/team.component";
import {UserManagementComponent} from "./admin/user-management/user-management.component";
import {LocationManagementComponent} from "./admin/location-management/location-management.component";
import {AddLocationComponent} from "./admin/location-management/add-location/add-location.component";
import {DetailsLocationComponent} from "./admin/location-management/details-location/details-location.component";

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
    children:[
      {
        path:'users',
        component:UserManagementComponent
      },{
        path:'locations',
        component:LocationManagementComponent
      },{
        path:'add-location',
        component:AddLocationComponent
      },{
        path:'details-location/:id',
        component:DetailsLocationComponent
      }

    ]
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
