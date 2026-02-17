import {Component} from '@angular/core';
import {BarChartsComponent} from "../../components/charts/bar-charts/bar-charts.component";
import {PieChartComponent} from "../../components/charts/pie-chart/pie-chart.component";
import {StatsCardComponent} from "../../components/cards/stats-card/stats-card.component";
import {UserCardsComponent} from "../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    BarChartsComponent,
    PieChartComponent,
    StatsCardComponent,
    UserCardsComponent
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
})
export class AdminHomeComponent {

  dataset: any[] = [4,5,6,8,9,10,12];
  labels: any[] = ['Players','Managers','Teams','Organizer','Referee','Supporter','Builder'];
  colors: any[] = ['#ffbe0b','#fb5607','#ff006e','#8338ec','#3a86ff','#4a5759','#22223b']


}
