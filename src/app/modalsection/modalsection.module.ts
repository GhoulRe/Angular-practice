import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsectionComponent } from './modalsection.component';
import { Routes,RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalmoduleModule } from '../modalmodule/modalmodule.module';

const modalcomp:Routes=[
  {
   path:'',
   component:ModalsectionComponent,
}
]

@NgModule({
  declarations: [ModalsectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(modalcomp),
    NgbModule,
    ModalmoduleModule,
  ]
})
export class ModalsectionModule { }
