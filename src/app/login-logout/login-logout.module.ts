import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLogoutComponent } from './login-logout.component';
import { Routes,RouterModule } from '@angular/router';

const loginoutroute:Routes= [
  {path:'',
   component:LoginLogoutComponent, 
  }
]

@NgModule({
  declarations: [LoginLogoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginoutroute)
  ]
})
export class LoginLogoutModule { }
