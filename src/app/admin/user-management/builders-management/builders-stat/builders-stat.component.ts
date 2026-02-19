import { Component } from '@angular/core';
import {CakeChartComponent} from "../../../../components/charts/cake-chart/cake-chart.component";
import {PreviousButtonComponent} from "../../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-builders-stat',
  imports: [
    CakeChartComponent,
    PreviousButtonComponent
  ],
  templateUrl: './builders-stat.component.html',
  styleUrl: './builders-stat.component.css',
})
export class BuildersStatComponent {

  expertiseLabels = [
    'Structure',
    'Turf',
    'Drainage',
    'Lighting',
    'Safety',
    'Project Management',
    'Regulation',
    'Innovation',
    'Sustainability'
  ];

  expertiseData = [8, 5, 3, 4, 6, 2, 3, 4, 5];

  expertiseColors = [
    '#4CAF50',
    '#81C784',
    '#29B6F6',
    '#FFA726',
    '#EF5350',
    '#AB47BC',
    '#5C6BC0',
    '#26A69A',
    '#8D6E63'
  ];


}
