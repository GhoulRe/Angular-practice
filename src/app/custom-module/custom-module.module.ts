import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandleInterceptor } from './error-handle.interceptor';
import { HandleApiErrorService } from './handle-api-error.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  entryComponents:[],
  providers:[HandleApiErrorService,{
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorHandleInterceptor,
    multi:true,
  },]
})
export class CustomModuleModule { 
  constructor(private handleApiErrorService: HandleApiErrorService){
    console.log("from custom module ",this.handleApiErrorService.data)
  }
}
