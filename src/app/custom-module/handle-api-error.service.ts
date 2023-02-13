import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleApiErrorService {
  data:any = 'api error service';
  constructor() { }
  handleError(){
    console.log('handling error');
  }
}
 