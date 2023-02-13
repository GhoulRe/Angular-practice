import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private _http:HttpClient) { }
  getfetchdata(){
     return this._http.get('https://reqres.in/api/users?page=2');
  }
}
