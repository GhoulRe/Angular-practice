import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

// import { CurrencyPipe } from '@angular/common';
// import { DecimalPipe } from '@angular/common';
// import { CurrencyFormatDirective } from './currency/currency-format.directive';
// import { CurrencyMaskDirective } from './currency/currency-mask.directive';

// import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
// import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
// import { ComponentAComponent } from './component-a/component-a.component';
// import { ComponentBComponent } from './component-b/component-b.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
// import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
// import { CustomModuleModule } from './custom-module/custom-module.module';


import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
// import { FetchComponentComponent } from './fetch-component/fetch-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
// import { LoginLogoutComponent } from './login-logout/login-logout.component';
// import { PieChartComponent } from './pie-chart/pie-chart.component';
// import { LineChartComponent } from './line-chart/line-chart.component';
// import { BarChartComponent } from './bar-chart/bar-chart.component';
// import { ModalsectionComponent } from './modalsection/modalsection.component';
// import { CurrencyComponent } from './currency/currency.component';
// import { DisplayComponent } from './display/display.component';
// import { DisplaychildComponent } from './displaychild/displaychild.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BComponent,
    CComponent,
    DComponent,
    // DropdownListComponent,
    // ComponentAComponent,
    // ComponentBComponent,
    // CardComponent,
    // FetchComponentComponent,
    // LoginLogoutComponent,
    // PieChartComponent,
    // LineChartComponent,
    // BarChartComponent,
    // ModalsectionComponent,
    // CurrencyComponent,
    // CurrencyFormatDirective,
    // CurrencyMaskDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    // NgbModule,
    // ListBoxModule,
    // DropDownListModule,
    SidebarModule,
    AppRoutingModule,
    // DashboardLayoutModule,
    // CustomModuleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
