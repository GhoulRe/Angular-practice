import { Component } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css'],
})
export class DropdownListComponent {
  dropdownFetchData: any;
  public data: any[] = [];
  public selectedvalue: string;

  constructor(private _apiservie: FetchDataService) {}

  async ngOnInit() {
    try {
      this.dropdownFetchData = await this._apiservie.getfetchdata().toPromise();
      this.data = this.dropdownFetchData.data.map((item) => item.first_name);
      this.selectedvalue = 'hi';
    } catch (error) {
      console.log('error api', error.message);
    }
  }

  onChange(event: ChangeEventArgs) {
    this.selectedvalue = event.item as any;
  }
}
