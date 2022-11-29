import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/model/person.model';
// https://blog.angular-university.io/angular-custom-form-controls/
@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressInputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AddressInputComponent
    }
  ]

})
export class AddressInputComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {

  sub: Subscription;

  constructor(private fb: FormBuilder) { }

  addressForm = this.fb.nonNullable.group({
    country: ['', [Validators.maxLength(20)]],
    city: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  writeValue(address: Address): void {
    if (address !== null) {
      this.addressForm.patchValue(address);
    }
  }

  registerOnChange(fn: any): void {
    this.sub = this.addressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.addressForm.disable();
    } else {
      this.addressForm.enable();
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors {
    console.log('validate!')
    let errors = {};
    if (this.addressForm.controls.country.errors) {
      errors = { ...errors, country: this.addressForm.controls.country.errors }
    }

    if (this.addressForm.controls.city.errors) {
      errors = { ...errors, city: this.addressForm.controls.city.errors }
    }
    console.log('ERRORS', errors);
    return errors;
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }


  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
