import { Component,Output,EventEmitter } from '@angular/core';
import { DataService } from '../dataService';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent {

  @Output() myData = new EventEmitter<string>();

   inputData:string = "";

   constructor(private dataService: DataService) {
    this.inputData = this.dataService.getData();
  }

  passData(){
    this.myData.emit('Data from child');
  }
}
