import {Component, inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {ChartModule, UIChart} from "primeng/chart";
import {isPlatformBrowser} from "@angular/common";
import {PreviousButtonComponent} from "../../buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-cake-chart',
  standalone: true,
  imports: [
    UIChart, ChartModule, PreviousButtonComponent
  ],
  templateUrl: './cake-chart.component.html',
  styleUrl: './cake-chart.component.css',
})
export class CakeChartComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);
  @Input() labels:any[] = [];
  @Input() info: any[] = [];
  @Input() colors: any[] = [];
  @Input() title: string = '';





  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
        labels: this.labels,
        datasets: [
          {
            data: this.info,
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colors
          }
        ]
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true
            }
          }
        }
      };


    }
  }
}

