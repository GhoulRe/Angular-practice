import { Component,ViewChild } from '@angular/core';
import {SidebarComponent} from '@syncfusion/ej2-angular-navigations';

//api import service
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  apiData = "apidata";
  newData : any;

  constructor(private _apiservie:FetchDataService){};

  ngOnInit(){
    this._apiservie.getfetchdata().subscribe(res=>{
      this.newData = res;
    })
  }

  status:boolean=false;
  @ViewChild('sidebar') sidebar: SidebarComponent;
  public showBackdrop: boolean = true;
  public type: string = 'Push';
  public width: string ='280px';
  public closeOnDocumentClick: boolean = true;
  public onCreated(args: any) {
       this.sidebar.element.style.visibility = '';
  }
  clickEvent(){
    this.status = !this.status;       
}
  closeClick(): void {
      this.sidebar.hide();
  };

  toggleClick():void{
    this.sidebar.show();
  }
}
