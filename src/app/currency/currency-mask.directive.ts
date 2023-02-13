import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Directive({
  selector: '[formControlName][appCurrencyMask]',
  providers: [DecimalPipe],
})
export class CurrencyMaskDirective {
  constructor(public ngControl: NgControl, decimalPipe: DecimalPipe) {}

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event: any) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event: any, backspace: any) {
    let newVal = event.replace(/\D/g, '');
    let num = ':)';
    // if (backspace && newVal.length <= 6) {
    //   newVal = newVal.substring(0, newVal.length - 1);
    // }

    // if (newVal.length === 0) {
    // } else if (newVal.length <= 3) {
    //   newVal = newVal.replace(/^(\d{0,3})/, "$1");
    // } else if (newVal.length <= 4) {
    //   newVal = newVal.replace(/^(\d{0,1})(\d{0,3})/, "$1,$2");
    // } else if (newVal.length <= 5) {
    //   newVal = newVal.replace(/^(\d{0,2})(\d{0,3})/, "$1,$2");
    // } else if (newVal.length <= 6) {
    //   newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, "$1,$2");
    // } else if (newVal.length <= 7) {
    //   newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,4})/, "$1,$2,$3");
    // } else if (newVal.length <= 8) {
    //   newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,4})/, "$1,$2,$3");
    // } else if (newVal.length <= 9) {
    //   newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, "$1,$2,$3");
    // } else {
    //   newVal = newVal.substring(0, 10);
    //   newVal = newVal.replace(
    //     /^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/,
    //     "$1,$2,$3,$4"
    //   );
    // }

    let locale = navigator.language; 
    let decimalPipe = new DecimalPipe(locale);
    // console.log('locale',locale);
    // console.log('decimalPipe',decimalPipe);

    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }

    // console.log("newval", newVal = decimalPipe.transform(newVal, '1.0-0'))
    if (newVal.length === 0) {
    } else if (newVal.length <= 3) {
      newVal = decimalPipe.transform(newVal, '1.0-0');
    } else if (newVal.length <= 4) {
      newVal = decimalPipe.transform(newVal, '1.0-3');
    } else if (newVal.length <= 5) {
      newVal = decimalPipe.transform(newVal, '2.0-3');
    } else if (newVal.length <= 6) {
      newVal = decimalPipe.transform(newVal, '3.0-3');
    } else if (newVal.length <= 7) {
      newVal = decimalPipe.transform(newVal, '1.0-6');
    } else if (newVal.length <= 8) {
      newVal = decimalPipe.transform(newVal, '2.0-6');
    } else if (newVal.length <= 9) {
      newVal = decimalPipe.transform(newVal, '3.0-6');
    } else {
      newVal = newVal.substring(0, 10);
      newVal = decimalPipe.transform(newVal, '1.0-9');
    }

    let userLocale = navigator.language || 'en-US';
    let currency;
    switch (userLocale) {
      case 'en-IN':
        currency = '₹';
        break;
      case 'en-US':
        currency = '$';
        break;  
      case 'en-GB':
        currency = '£';
        break;
      case 'en-AU':
        currency = 'A$';
        break;
      case 'en-CA':
        currency = 'C$';
        break;
      case 'en-EU':
        currency = '€';
        break;
      case 'en-CH':
        currency = 'CHF';
        break;
      case 'ast':
        currency = 'A$';
        break;
      case 'fr':
        currency = '€';
        break;
      case 'ja':
        currency = '¥';
        break;
      case 'en-US':
        currency = '$';
        break;
      default:
        currency = '$';
    }
    this.ngControl.valueAccessor!.writeValue(currency + newVal);
    console.log(this.toNumber(newVal));
  }

  toNumber(val: any) {
    let valArr = val.split('');
    let valFiltered = valArr.filter((x: any) => !isNaN(x));
    let valProcessed = valFiltered.join('');
    return valProcessed;
  }
}
