import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
// import { ComponentBComponent } from './component-b/component-b.component';
import { AppComponent } from './app.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { FetchComponentComponent } from './fetch-component/fetch-component.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
// import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ModalsectionComponent } from './modalsection/modalsection.component';
import { CurrencyComponent } from './currency/currency.component';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

const routes: Routes = [
  {
    path: 'component-a',
    loadChildren: ()=> import('./component-a/component-a.module').then(x => x.ComponentAModule),
  },
  {
    path: 'component-b',
    loadChildren: ()=> import('./component-b/component-b.module').then(x => x.ComponentBModule),
  },
  {
    path: '',
    component: ComponentAComponent,
  },
  {
    path: 'dropdown',
    loadChildren:()=> import('./dropdown-list/dropdown-list.module').then(x => x.DropdownListModule)
  },
  {
    path: 'fetch',
    loadChildren:()=> import('./fetch-component/fetch-component.module').then(x => x.FetchComponentModule),
  },
  {
    path: 'login',
    loadChildren:()=> import('./login-logout/login-logout.module').then(x => x.LoginLogoutModule),
  },
  { path: 'piechart', 
    loadChildren:()=> import('./pie-chart/pie-chart.module').then(x => x.PieChartModule), 
  },
  { path: 'barchart', loadChildren:()=> import('./bar-chart/bar-chart.module').then(x => x.BarChartModule)},
  { path: 'linechart',
    loadChildren: ()=> import('./line-chart/line-chart.module').then(x => x.LineChartModule),
  },
  { path: 'modal',
    loadChildren:()=> import('./modalsection/modalsection.module').then(x => x.ModalsectionModule),
   },
  {
    path: 'currency',
    loadChildren:()=> import('./currency/currency.module').then(x => x.CurrencyModule),
  },
  {
    path:'display',
    loadChildren:()=> import('./display/display.module').then(x => x.DisplayModule),
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
