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
import {PlayerDetailsComponent} from "./admin/user-management/players-management/player-details/player-details.component";
import {UpdatePlayerComponent} from "./manager/player-management/update-player/update-player.component";
import {PlayerTransferComponent} from "./manager/player-transfer/player-transfer.component";
import {TransferAdjustComponent} from "./manager/player-transfer/transfer-adjust/transfer-adjust.component";
import {TransferDetailComponent} from "./manager/player-transfer/transfer-detail/transfer-detail.component";
import {SeeInjuriesComponent} from "./manager/see-injuries/see-injuries.component";
import {TeamManagementComponent} from "./manager/team-management/team-management.component";
import {SetLineUpComponent} from "./manager/team-management/set-line-up/set-line-up.component";
import {TeamResultsComponent} from "./manager/team-results/team-results.component";
import {TrainingManagementComponent} from "./manager/training-management/training-management.component";
import {SetTrainingSessionComponent} from "./manager/training-management/set-training-session/set-training-session.component";
import {MatchesManagementComponent} from "./organizer/matches-management/matches-management.component";
import {SetRatingsComponent} from "./organizer/matches-management/set-ratings/set-ratings.component";
import {SetStadiumsComponent} from "./organizer/matches-management/set-stadiums/set-stadiums.component";
import {SetTicketsComponent} from "./organizer/matches-management/set-tickets/set-tickets.component";
import {ViewStatsComponent} from "./organizer/matches-management/view-stats/view-stats.component";
import {RefereeManagementComponent} from "./organizer/referee-management/referee-management.component";
import {AddRefereeComponent} from "./organizer/referee-management/add-referee/add-referee.component";
import {AppointRefereeComponent} from "./organizer/referee-management/appoint-referee/appoint-referee.component";
import {ConsultRefereeComponent} from "./organizer/referee-management/consult-referee/consult-referee.component";
import {TournamentEditionsComponent} from "./organizer/tournament-editions/tournament-editions.component";
import {AddEditionComponent} from "./organizer/tournament-editions/add-edition/add-edition.component";
import {BestStatsComponent} from "./organizer/tournament-editions/best-stats/best-stats.component";
import {ConsultEditionComponent} from "./organizer/tournament-editions/consult-edition/consult-edition.component";
import {GroupStatsComponent} from "./organizer/tournament-editions/group-stats/group-stats.component";
import {PlayerStatsComponent} from "./organizer/tournament-editions/player-stats/player-stats.component";
import {SetResultsComponent} from "./organizer/tournament-editions/set-results/set-results.component";
import {TeamStatsComponent} from "./organizer/tournament-editions/team-stats/team-stats.component";
import {TournamentsManagementComponent} from "./organizer/tournaments-management/tournaments-management.component";
import {GeneralStatsComponent} from "./organizer/tournaments-management/general-stats/general-stats.component";
import {SetRulesComponent} from "./organizer/tournaments-management/set-rules/set-rules.component";
import {ViewTournamentComponent} from "./organizer/tournaments-management/view-tournament/view-tournament.component";
import {ViewTeamsComponent} from "./organizer/view-teams/view-teams.component";
import {AddTeamComponent} from "./organizer/view-teams/add-team/add-team.component";
import {ViewTeamComponent} from "./organizer/view-teams/view-team/view-team.component";
import {UpdateTeamComponent} from "./organizer/view-teams/update-team/update-team.component";
import {ConsultMatchesComponent} from "./player/consult-matches/consult-matches.component";
import {ConsultRatingsComponent} from "./player/consult-ratings/consult-ratings.component";
import {ConsultTrainingsComponent} from "./player/consult-trainings/consult-trainings.component";
import {ContractManagementComponent} from "./player/contract-management/contract-management.component";
import {SeeStatisticsComponent} from "./player/see-statistics/see-statistics.component";
import {TeamConsultComponent} from "./player/team-consult/team-consult.component";
import {ChangeLocationComponent} from "./supporter/change-location/change-location.component";
import {ConsultTicketsComponent} from "./supporter/consult-tickets/consult-tickets.component";
import {AskForTransferComponent} from "./team/ask-for-transfer/ask-for-transfer.component";
import {ListMatchesComponent} from "./team/list-matches/list-matches.component";
import {ListPlayerComponent} from "./team/list-player/list-player.component";
import {ListTournamentsComponent} from "./team/list-tournaments/list-tournaments.component";
import {ListTrainsComponent} from "./team/list-trains/list-trains.component";
import {LookForManagerComponent} from "./team/look-for-manager/look-for-manager.component";
import {ManagerDetailsComponent} from "./admin/user-management/managers-management/manager-details/manager-details.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {roleGuard} from "./Shared/services/guard/auth.guard";
import {HomePageComponent} from "./home-page/home-page.component";
import {NoAccessComponent} from "./no-access/no-access.component";
import {RefereeComponent} from "./referee/referee.component";
import {PlayersManagementComponent} from "./admin/user-management/players-management/players-management.component";
import {ManagersManagementComponent} from "./admin/user-management/managers-management/managers-management.component";
import {TeamsManagementComponent} from "./admin/user-management/teams-management/teams-management.component";
import {RefereesManagementComponent} from "./admin/user-management/referees-management/referees-management.component";
import {
  OrganizersManagementComponent
} from "./admin/user-management/organizers-management/organizers-management.component";
import {
  SupportersManagementComponent
} from "./admin/user-management/supporters-management/supporters-management.component";
import {BuildersManagementComponent} from "./admin/user-management/builders-management/builders-management.component";
import {
  BuildersActionsComponent
} from "./admin/user-management/builders-management/builders-actions/builders-actions.component";
import {BuildersStatComponent} from "./admin/user-management/builders-management/builders-stat/builders-stat.component";
import {BuildersListComponent} from "./admin/user-management/builders-management/builders-list/builders-list.component";
import {
  BuildersAddingComponent
} from "./admin/user-management/builders-management/builders-adding/builders-adding.component";
import {
  BuilderDetailsComponent
} from "./admin/user-management/builders-management/builder-details/builder-details.component";
import {
  ManagersActionsComponent
} from "./admin/user-management/managers-management/managers-actions/managers-actions.component";
import {ManagersStatComponent} from "./admin/user-management/managers-management/managers-stat/managers-stat.component";
import {ManagersListComponent} from "./admin/user-management/managers-management/managers-list/managers-list.component";
import {
  ManagersAddingComponent
} from "./admin/user-management/managers-management/managers-adding/managers-adding.component";
import {
  PlayersActionsComponent
} from "./admin/user-management/players-management/players-actions/players-actions.component";
import {PlayersStatComponent} from "./admin/user-management/players-management/players-stat/players-stat.component";
import {PlayersListComponent} from "./admin/user-management/players-management/players-list/players-list.component";
import {
  PlayersAddingComponent
} from "./admin/user-management/players-management/players-adding/players-adding.component";
import {TeamDetailsComponent} from "./admin/user-management/teams-management/team-details/team-details.component";
import {TeamsActionsComponent} from "./admin/user-management/teams-management/teams-actions/teams-actions.component";
import {TeamsStatComponent} from "./admin/user-management/teams-management/teams-stat/teams-stat.component";
import {TeamsListComponent} from "./admin/user-management/teams-management/teams-list/teams-list.component";
import {TeamsAddingComponent} from "./admin/user-management/teams-management/teams-adding/teams-adding.component";
import {AllLocationsListComponent} from "./admin/location-management/all-locations-list/all-locations-list.component";
import {
  ContinentLocationsComponent
} from "./admin/location-management/continent-locations/continent-locations.component";
import {DatabaseChatComponent} from "./admin/database-chat/database-chat.component";
import {ChattingUiComponent} from "./admin/chatting-ui/chatting-ui.component";

export const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    title: 'Home page',
    children: [
      {
        path:'admin',
        component: AdminComponent,
        title: 'Admin dashboard',
        canActivate: [roleGuard], data: { roles: ['admin'] },
        children:[ {
          path:'',
          component:AdminHomeComponent
        },{
          path:'users',
          component:UserManagementComponent
        },{
          path:'locations',
          component:LocationManagementComponent
        },{
          path:'details-builders/:id',
          component:BuilderDetailsComponent
        },
          {
            path:'managers-manage',
            component:ManagersManagementComponent
          },
          {
            path:'players-manage',
            component:PlayersManagementComponent
          },
          {
            path:'teams-manage',
            component:TeamsManagementComponent
          },
          {
            path:'referees-manage',
            component:RefereesManagementComponent
          },
          {
            path:'organizers-manage',
            component:OrganizersManagementComponent
          },
          {
            path:'supporters-manage',
            component:SupportersManagementComponent
          },
          {
            path:'builders-manage',
            component:BuildersManagementComponent
          },
          {
            path:'builder-actions',
            component:BuildersActionsComponent
          },
          {
            path:'builder-stats',
            component:BuildersStatComponent
          },
          {
            path:'builder-list',
            component:BuildersListComponent
          },
          {
            path:'builders-add',
            component:BuildersAddingComponent
          },
          {
            path:'manager-details/:id',
            component:ManagerDetailsComponent
          },
          {
            path:'manager-actions',
            component:ManagersActionsComponent
          },
          {
            path:'manager-stats',
            component:ManagersStatComponent
          },
          {
            path:'manager-list',
            component:ManagersListComponent
          },
          {
            path:'managers-add',
            component:ManagersAddingComponent
          },
          {
            path:'player-details/:id',
            component:PlayerDetailsComponent
          },
          {
            path:'player-actions',
            component:PlayersActionsComponent
          },
          {
            path:'player-stats',
            component:PlayersStatComponent
          },
          {
            path:'player-list',
            component:PlayersListComponent
          },
          {
            path:'players-add',
            component:PlayersAddingComponent
          },
          {
            path:'team-details/:id',
            component:TeamDetailsComponent
          },
          {
            path:'team-actions',
            component:TeamsActionsComponent
          },
          {
            path:'team-stats',
            component:TeamsStatComponent
          },
          {
            path:'team-list',
            component:TeamsListComponent
          },
          {
            path:'teams-add',
            component:TeamsAddingComponent
          },
          {
            path:'locations-list',
            component:AllLocationsListComponent
          },
          {
            path:'list-location/:continent',
            component:ContinentLocationsComponent
          },
          {
            path:'database-chat',
            component:DatabaseChatComponent
          },
          {
            path:'chatting-ui/:database',
            component:ChattingUiComponent
          }
        ]
      },
      {
        path:'builder',
        component: BuilderComponent,
        canActivate: [roleGuard], data: { roles: ['Builder'] },
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
        canActivate: [roleGuard], data: { roles: ['Manager'] },
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
        canActivate: [roleGuard], data: { roles: ['Organizer'] },
        children:[
          {
            path:'matches',
            component:MatchesManagementComponent
          },
          {
            path:'ratings:/id',
            component: SetRatingsComponent
          },
          {
            path:'stadium/:id',
            component: SetStadiumsComponent
          },
          {
            path:'tickets/:id',
            component: SetTicketsComponent
          },
          {
            path: 'view-stats/:id',
            component: ViewStatsComponent
          },
          {
            path:'referees',
            component: RefereeManagementComponent
          },
          {
            path:'add-ref',
            component: AddRefereeComponent
          },
          {
            path:'appoint/:id',
            component: AppointRefereeComponent
          },
          {
            path:'consult/:id',
            component: ConsultRefereeComponent
          },
          {
            path:'tournament-edition',
            component: TournamentEditionsComponent
          },
          {
            path:'add-edition',
            component: AddEditionComponent
          },
          {
            path:'stats/:id',
            component: BestStatsComponent
          },
          {
            path:'consult-edition/:id',
            component: ConsultEditionComponent
          },
          {
            path:'stats-group/:id',
            component: GroupStatsComponent
          },
          {
            path:'player-stats/:id',
            component: PlayerStatsComponent
          },
          {
            path:'set-results/:id',
            component: SetResultsComponent
          },
          {
            path:'team-stats/:id',
            component: TeamStatsComponent
          },
          {
            path:'tournaments',
            component: TournamentsManagementComponent
          },
          {
            path:'stats/:id',
            component:GeneralStatsComponent
          },
          {
            path:'rules/:id',
            component:SetRulesComponent
          },
          {
            path:'view/:id',
            component:ViewTournamentComponent
          },{
            path:'teams',
            component:ViewTeamsComponent
          },{
            path:'add-team',
            component:AddTeamComponent
          },{
            path:'view-team/:id',
            component:ViewTeamComponent
          },{
            path:'update-team/:id',
            component:UpdateTeamComponent
          },
        ]
      },{
        path:'player',
        component: PlayerComponent,
        canActivate: [roleGuard], data: { roles: ['Player'] },
        children:[
          {
            path:'matches',
            component:ConsultMatchesComponent
          },{
            path:'ratings',
            component:ConsultRatingsComponent
          },{
            path:'trainings',
            component:ConsultTrainingsComponent
          },{
            path:'contracts',
            component:ContractManagementComponent
          },{
            path:'stats',
            component:SeeStatisticsComponent
          },{
            path:'team',
            component:TeamConsultComponent
          }
        ]
      },{
        path:'supporter',
        component: SupporterComponent,
        canActivate: [roleGuard], data: { roles: ['Supporter'] },
        children:[
          {
            path:'location',
            component:ChangeLocationComponent
          },{
            path:'matches',
            component:ConsultMatchesComponent
          },{
            path:'tickets',
            component:ConsultTicketsComponent
          },
        ]
      },{
        path:'team',
        component: TeamComponent,
        canActivate: [roleGuard], data: { roles: ['Team'] },
        children:[
          {
            path:'transfer',
            component: AskForTransferComponent
          },{
            path:'matches',
            component:ListMatchesComponent
          },{
            path:'players',
            component:ListPlayerComponent
          },{
            path:'tourns',
            component:ListTournamentsComponent
          },{
            path:'trains',
            component:ListTrainsComponent
          },{
            path:'manager-search',
            component:LookForManagerComponent
          },{
            path:'manager-details',
            component:ManagerDetailsComponent
          },
        ]
      },{
        path:'referee',
        component: RefereeComponent,
        title: 'Referee dashboard',
        canActivate: [roleGuard], data: { roles: ['Referee'] },
      },{
        path:'not-authorized',
        component: NoAccessComponent,
        title:"Access required"
      }
    ]
  }

];
