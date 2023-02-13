import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchComponentComponent } from './fetch-component.component';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const fetchroute:Routes=[
  {
   path:'',
   component:FetchComponentComponent,
}
]

@NgModule({
  declarations: [FetchComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(fetchroute),
    HttpClientModule,
  ]
})
export class FetchComponentModule { }
