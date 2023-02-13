import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { CurrencyFormatDirective } from '../currency/currency-format.directive';
import { CurrencyMaskDirective } from '../currency/currency-mask.directive';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const currencyRoute:Routes=[
  {
   path:'',
   component:CurrencyComponent,
}
]

@NgModule({
  declarations: [CurrencyComponent,CurrencyFormatDirective,
    CurrencyMaskDirective,],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(currencyRoute),
    ReactiveFormsModule
  ],
  providers:[CurrencyPipe,DecimalPipe],
  exports:[CurrencyFormatDirective,CurrencyMaskDirective]
})
export class CurrencyModule { }
