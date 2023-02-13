import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownListComponent } from './dropdown-list.component';
import { Routes,RouterModule } from '@angular/router';
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

const dropdownlistroute:Routes=[
  {
   path:'',
   component:DropdownListComponent,
}
]

@NgModule({
  declarations: [DropdownListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dropdownlistroute),
    ListBoxModule,
    DropDownListModule
  ]
})
export class DropdownListModule { }
