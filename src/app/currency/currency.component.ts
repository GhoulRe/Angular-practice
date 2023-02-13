import { Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit { 
  form: FormGroup;
  amount3: number = 0;

  constructor(fb:FormBuilder){
    this.form=fb.group({
      currency:[''],
      currency2:['']
    })
  this.onChanges();
  }
  log(){
    console.log(typeof(this.amount3));
  }

  restrictInput(event: KeyboardEvent) {
    let key = event.keyCode;
    // only allow numbers
    if ( (key > 47 && key < 58) || key === 8 ) {
      return;
    }
    event.preventDefault();
  }
  
  onChanges(): void {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.value)
    });
 }

  ngOnInit(): void {}
}
