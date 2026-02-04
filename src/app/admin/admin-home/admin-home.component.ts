import {Component} from '@angular/core';
import {BarChartsComponent} from "../../components/charts/bar-charts/bar-charts.component";

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    BarChartsComponent
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
})
export class AdminHomeComponent {


}
