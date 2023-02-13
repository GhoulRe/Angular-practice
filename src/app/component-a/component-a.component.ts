import { Component } from '@angular/core';
import { DataService } from '../dataService';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {
  inputData:string = "";

  constructor(private dataService: DataService) {}

  sendData() {
    this.dataService.setData(this.inputData);
    this.inputData = "";
  }

  childData($event:any){
   console.log($event);
  }

  send(){
     console.log(this.inputData);
    }
}
