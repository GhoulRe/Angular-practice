import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart.component';
import { RouterModule,Routes } from '@angular/router';

const lineCartRoutes:Routes=[
  {
   path:'',
   component:LineChartComponent,
}
]

@NgModule({
  declarations: [LineChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(lineCartRoutes)
  ]
})
export class LineChartModule { }
