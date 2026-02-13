import {Component, OnInit, inject, PLATFORM_ID} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
})
export class PieChartComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);


  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');

      this.data = {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(6, 182, 212)',   // cyan-500
              'rgb(249, 115, 22)',  // orange-500
              'rgb(107, 114, 128)'  // gray-500
            ],
            hoverBackgroundColor: [
              'rgb(34, 211, 238)',  // cyan-400
              'rgb(251, 146, 60)',  // orange-400
              'rgb(156, 163, 175)'  // gray-400
            ]
          }
        ]
      };


      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        }
      };
    }
  }
}
