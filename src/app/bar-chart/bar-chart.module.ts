import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import {BarChartComponent} from './bar-chart.component';

const barCartRoutes:Routes=[
  {
   path:'',
   component:BarChartComponent,
}
]

@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(barCartRoutes),
  ],
  exports:[RouterModule]
})
export class BarChartModule { 
  constructor(){}
 }
