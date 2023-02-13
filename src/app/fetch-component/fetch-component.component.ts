import { Component } from '@angular/core';
//api import service
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-fetch-component',
  templateUrl: './fetch-component.component.html',
  styleUrls: ['./fetch-component.component.css']
})
export class FetchComponentComponent {
  fetchApiData = "apidata";
  newFetchData : any; 

  constructor(private _apiservie:FetchDataService){};

  ngOnInit(){
    this._apiservie.getfetchdata().subscribe(res=>{
      this.newFetchData = res;
    })
  }
}
