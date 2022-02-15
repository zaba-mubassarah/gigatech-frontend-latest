import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {Router} from '@angular/router';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.css']
})
export class DataVisualizationComponent implements OnInit {

  public data: any;
  result: any;
  coinPrice: any = 21;
  coinName: any = 'sdsd';
  femaleStr:any = '';
maleStr:any = '';
  name:any;
  chart: any = [];
 chartData : any[] = [];
 myArr: any[] = [];
  public getData(route: string): Observable<any> {
    const apiUrlLogin = 'https://gorest.co.in/'
    const url = apiUrlLogin + route;
    return this.http.get(url);
  }
  constructor(private router: Router,
    private http: HttpClient,) {

  }

  ngOnInit(): void {
    // const ctx = document.getElementById('myChart').getContext('2d');
    
    this.getData(`public/v2/users`)
    .subscribe((response) => {
      console.log(response);
      let Myres:any[]=response;
      let totalArrLen =  response.length;
      console.log(response.length);
      const resultFemale = Myres.filter(data => data.gender == 'female');
      console.log(resultFemale.length);
      let resultMaleLength = totalArrLen - resultFemale.length;
      this.chartData.push(resultFemale.length);
       this.chartData.push(resultMaleLength);
       console.log('this.chartData',this.chartData);
      let femalePercentage = resultFemale.length / totalArrLen * 100;
      let malePercentage = 100 - femalePercentage;
      console.log(femalePercentage,malePercentage); 
      let femaleStr = 'Total Female:' + resultFemale.length + ',' + 'Percentage:' + femalePercentage;
      let maleStr = 'Total Male:' + resultMaleLength + ',' + 'Percentage:' + malePercentage;
      this.femaleStr = femaleStr;
      this.maleStr = maleStr;
      
      this.myArr.push(femaleStr) ;
      this.myArr.push(maleStr) ;
     const myChart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: this.myArr,
        datasets: [{
          label: '',
          data: this.chartData,
          backgroundColor: [

          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',

          ],
          borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    }); 
    if(this.chartData.length>0){

    }
    
  }
  logoutAction(){
    console.log('logout called');
    this.router.navigateByUrl('/portal/login');
    localStorage.setItem("loginStatus", 'out');
  }
}
