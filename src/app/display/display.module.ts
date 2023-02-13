import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { Routes,RouterModule } from '@angular/router';
import { DisplaychildComponent } from '../displaychild/displaychild.component';

const displayCom:Routes=[
  {
   path:'',
   component:DisplayComponent,
}
]

@NgModule({
  declarations: [DisplayComponent,DisplaychildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(displayCom)
  ]
})
export class DisplayModule { }
