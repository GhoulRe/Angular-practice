import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public chart:any;

  constructor() { }

  createChart(){
    this.chart = new Chart('myPieChart',{
      type:'pie',
      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11','2022-05-12','2022-05-13','2022-05-14','2022-05-15', ],
	       datasets: [{
    label: 'My First Dataset',
    data: [310, 240, 100, 432, 253, 34],
    backgroundColor: [
      '#6497b1',
      'lightpink',
      '#83d0c9',
			'#fdf498 ',
      '#851e3e',
      'lightblue',			
    ],
  }],
      },
      options: {
        aspectRatio:2.5
      }
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

}
