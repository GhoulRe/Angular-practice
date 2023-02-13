import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a.component';
import { FormsModule } from '@angular/forms';


const componenta:Routes=[
  {path:'',
   component:ComponentAComponent, 
  }
]

@NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(componenta),
    FormsModule,
  ],
  exports:[RouterModule]
})
export class ComponentAModule { }
