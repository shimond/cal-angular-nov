import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-num-input',
  templateUrl: './num-input.component.html',
  styleUrls: ['./num-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NumInputComponent
    }
  ]
})
export class NumInputComponent implements OnInit, ControlValueAccessor {

  @Input() stepSize: number = 1;
  value = 0;
  onChangeCallback: any;
  disabled = false;
  constructor() { }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange', fn);
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  plus() {
    this.value += this.stepSize;
    this.notifyChanged();
  }

  minus() {
    this.value -= this.stepSize;
    this.notifyChanged();
  }

  notifyChanged() {
    if (this.onChangeCallback) {
      this.onChangeCallback(this.value);
    }
  }
}
