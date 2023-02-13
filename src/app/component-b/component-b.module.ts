import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBComponent } from './component-b.component';
import { Routes,RouterModule } from '@angular/router';

const componentbroute:Routes=[
  {
   path:'',
   component:ComponentBComponent,
}
]

@NgModule({
  declarations: [ComponentBComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(componentbroute)
  ]
})
export class ComponentBModule { }
