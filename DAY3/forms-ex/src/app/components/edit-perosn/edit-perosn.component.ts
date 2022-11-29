import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { Address, Person } from 'src/app/model/person.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-perosn',
  templateUrl: './edit-perosn.component.html',
  styleUrls: ['./edit-perosn.component.scss']
})
export class EditPerosnComponent implements OnInit {
  personToEdit: Person = {
    id: 1, name: 'ari', email: 'David@gmail.com', age: 20, isAdmin: true,
    workAddress: { country: 'Israel', city: 'Jerusalem' },
    homeAddress: { country: 'Qatar', city: 'Doha' },
    hobbies: [
      { name: 'C#', rating: 2 },
      { name: 'VB6', rating: 1 },
      { name: 'Angular', rating: 3 },
      { name: 'Java', rating: 1 },
    ]
  };
  temp = 'A';

  validateNameAsync(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.userService.validateUserName(control.value).
      pipe(map(res => {
        if (res) {
          return null;
        } else {
          return { "AsyncInServiceValidation": true }
        }
      }));
  }

  validateName(control: AbstractControl): ValidationErrors | null {
    const s: string = control.value;
    if (s.includes(this.temp)) {
      return {
        'includes': { temp: this.temp }
      };
    }
    return null;
  }

  validateWorkAddress(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const address: Address = control.value;
      if (address.city === address.country) {
        return { "CityCountrySame": true };
      }
    }

    return null;
  }


  constructor(private fb: FormBuilder, private userService: UsersService) { }

  arr: FormGroup<{
    name: FormControl<string>,
    rating: FormControl<number>
  }>[] = [];

  perosnForm = this.fb.nonNullable.group({
    id: [-1],
    name: ['',
      {
        validators: [Validators.required, Validators.minLength(2),
        (e: AbstractControl) => this.validateName(e)],
        asyncValidators: [(a: AbstractControl) => this.validateNameAsync(a)]
      }
    ],
    email: ['', [Validators.email]],
    age: [0, [Validators.min(0)]],
    isAdmin: [false],
    workAddress: new FormControl<Address>(null, { validators: [this.validateWorkAddress] }),
    homeAddress: [{ country: '', city: '' }],
    hobbies: this.fb.nonNullable.array(this.arr),
  }, {
    asyncValidators: [],
    validators: [this.validateAll]
  });

  ngOnInit(): void {
    this.addHobbiesGroups(this.personToEdit);
    this.perosnForm.patchValue(this.personToEdit);
  }

  addHobbiesGroups(personToEdit: Person) {
    const hobbiesArray = this.perosnForm.controls.hobbies;
    for (const hobbie of personToEdit.hobbies) {
      hobbiesArray.push(this.fb.group({
        name: ['', [Validators.required]],
        rating: [1]
      }));
    }
  }
  removeHobbie(idx: number) {
    this.perosnForm.controls.hobbies.removeAt(idx);
  }

  addNewHobbie() {
    this.perosnForm.controls.hobbies.push(this.fb.group({
      name: ['', [Validators.required]],
      rating: [1]
    }));
  }

  validateAll(control: AbstractControl): ValidationErrors | null {
    const p: Person = control.getRawValue();
    if (p.email.includes('a') && p.name.length > 5) {
      return { "a-&&->-then-5": true };
    }
    return null;
  }


  disableEmail() {
    this.perosnForm.controls.email.disable();
  }

  save() {
    // this.personToEdit = this.perosnForm.getRawValue();
  }

}
