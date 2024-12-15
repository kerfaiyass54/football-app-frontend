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
import {FieldsTrainManagementComponent} from "./builder/fields-train-management/fields-train-management.component";
import {FieldsDetailsComponent} from "./builder/fields-train-management/fields-details/fields-details.component";
import {AddFieldComponent} from "./builder/fields-train-management/add-field/add-field.component";
import {MakeUpgradeComponent} from "./builder/fields-train-management/make-upgrade/make-upgrade.component";
import {StadiumsManagementComponent} from "./builder/stadiums-management/stadiums-management.component";
import {BuildStadiumComponent} from "./builder/stadiums-management/build-stadium/build-stadium.component";
import {DetailsStadiumComponent} from "./builder/stadiums-management/details-stadium/details-stadium.component";
import {UpgradeStadiumComponent} from "./builder/stadiums-management/upgrade-stadium/upgrade-stadium.component";

export const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children:[ {
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
    }]
  },
  {
    path:'builder',
    component: BuilderComponent,
    children:[{
      path: 'fields',
      component: FieldsTrainManagementComponent
    },
      {
        path: 'add-field',
        component: AddFieldComponent
      },
      {
        path: 'details-field/:id',
        component: FieldsDetailsComponent
      },{
        path: 'upgrade/:id',
        component: MakeUpgradeComponent
      },{
        path:'stadiums',
        component: StadiumsManagementComponent
      },
      {
        path: 'build-stadium',
        component: BuildStadiumComponent
      },{
        path:'details-stadium/:id',
        component: DetailsStadiumComponent
      },{
        path:'upgrade/:id',
        component: UpgradeStadiumComponent
      }]
  },{
    path:'manager',
    component: ManagerComponent,
    children:[


    ]
  },{
    path:'organizer',
    component: OrganizerComponent,
    children:[
      ]
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
