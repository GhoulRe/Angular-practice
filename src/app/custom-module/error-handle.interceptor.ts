import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError,Observable,throwError } from 'rxjs';
import { tap } from 'rxjs';
import { HandleApiErrorService } from './handle-api-error.service';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor(private handleApiErrorService: HandleApiErrorService) {
    console.log('log from error interceptor');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((error:HttpErrorResponse)=>{
         console.log('errorHandlerInterceptor: ',error);
         return throwError(error);
      })
    )
  }
}
