import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[appCurrencyFormat]',
})
export class CurrencyFormatDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) { this.el = this.elementRef.nativeElement;}

  ngOnInit() {
    this.el.value = this.formatCurrency(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: any) {
    this.el.value = this.unformatCurrency(value);
  }

  // @HostListener('blur', ['$event.target.value'])
  // onBlur(value: any) {
  //   this.el.value = this.formatCurrency(value);
  // }

  @HostListener('input', ['$event.target.value'])
  onInput(value: any) {
    this.el.value = this.formatCurrency(value);
  }


  private formatCurrency(value: string | null): string {
    let userLocale = navigator.language || 'en-US';
    let currency;
    switch (userLocale) {
      case 'en-IN':
        currency = 'INR';
        break;
      case 'en-US':
        currency = 'USD';
        break;
      case 'en-GB':
        currency = 'GBP';
        break;
      case 'en-AU':
        currency = 'AUD';
        break;
      case 'en-CA':
        currency = 'CAD';
        break;
      case 'en-EU':
        currency = 'EUR';
        break;
      case 'en-CH':
        currency = 'CHF';
        break;
      case 'ast':
        currency = 'AUD';
        break;
      case 'en-AU':
        currency = 'AUD';
        break;
      case 'fr':
        currency = 'EUR';
        break;
      case 'ja':
        currency = 'JPY';
        break;

      default:
        currency = 'USD';
    }
    if (!value) {
      return '';
    }

    if (!/^\d+$/.test(value)) {
      return '';
    }

    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      return '';
    }
    return parseFloat(value).toLocaleString(userLocale, {
      style: 'currency',
      currency: currency,
    });
  }

  private unformatCurrency(value: string): string {
    const rejex = /^\$\d+(,\d{3})*(\.\d{2})?$/;
    if (!rejex.test(value)) {
      return '';
    }
    return parseFloat(value.replace(/[^0-9.-]+/g, '')).toString();
  }
}





