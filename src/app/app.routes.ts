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
import {CareerManagementComponent} from "./manager/career-management/career-management.component";
import {AddCareerComponent} from "./manager/career-management/add-career/add-career.component";
import {CareerDetailsComponent} from "./manager/career-management/career-details/career-details.component";
import {TournamentDetailsComponent} from "./manager/consult-tournament/tournament-details/tournament-details.component";
import {ConsultTournamentComponent} from "./manager/consult-tournament/consult-tournament.component";
import {MatchManagementComponent} from "./manager/match-management/match-management.component";
import {MatchDetailsComponent} from "./manager/match-management/match-details/match-details.component";
import {PlayerManagementComponent} from "./manager/player-management/player-management.component";
import {PlayerDetailsComponent} from "./manager/player-management/player-details/player-details.component";
import {UpdatePlayerComponent} from "./manager/player-management/update-player/update-player.component";
import {PlayerTransferComponent} from "./manager/player-transfer/player-transfer.component";
import {TransferAdjustComponent} from "./manager/player-transfer/transfer-adjust/transfer-adjust.component";
import {TransferDetailComponent} from "./manager/player-transfer/transfer-detail/transfer-detail.component";
import {SeeInjuriesComponent} from "./manager/see-injuries/see-injuries.component";
import {TeamManagementComponent} from "./manager/team-management/team-management.component";
import {SetLineUpComponent} from "./manager/team-management/set-line-up/set-line-up.component";
import {TeamResultsComponent} from "./manager/team-results/team-results.component";
import {TrainingManagementComponent} from "./manager/training-management/training-management.component";
import {
  SetTrainingSessionComponent
} from "./manager/training-management/set-training-session/set-training-session.component";

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
      {
        path:'career',
        component: CareerManagementComponent
      },
      {
        path:'add-career',
        component: AddCareerComponent
      },
      {
        path: 'career-details/:id',
        component: CareerDetailsComponent
      },
      {
        path:'tournament/:id',
        component: TournamentDetailsComponent
      },
      {
        path:'tourns',
        component: ConsultTournamentComponent
      },
      {
        path:'match',
        component: MatchManagementComponent
      },
      {
        path:'match/:id',
        component: MatchDetailsComponent
      },
      {
        path:'players',
        component: PlayerManagementComponent
      },
      {
        path:'details-player/:id',
        component: PlayerDetailsComponent
      },
      {
        path:'update-player/:id',
        component: UpdatePlayerComponent
      },
      {
        path:'transfers',
        component: PlayerTransferComponent
      },
      {
        path:'transfer-adjust/:id',
        component: TransferAdjustComponent
      },
      {
        path:'transfer/:id',
        component: TransferDetailComponent
      },
      {
        path:'injuries',
        component: SeeInjuriesComponent
      },
      {
        path:'team',
        component: TeamManagementComponent
      },
      {
        path:'lineup',
        component: SetLineUpComponent
      },
      {
        path:'results/:id',
        component: TeamResultsComponent
      },
      {
        path:'training/:id',
        component: TrainingManagementComponent
      },
      {
        path:'session/:id',
        component: SetTrainingSessionComponent
      }

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
