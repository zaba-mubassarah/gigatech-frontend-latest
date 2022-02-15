import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];
  constructor() {
    // Chart.register(...registerables);
  }
  
  title = 'gigatech-frontend';
}
