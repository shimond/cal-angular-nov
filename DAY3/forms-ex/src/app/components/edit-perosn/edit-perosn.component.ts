import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-edit-perosn',
  templateUrl: './edit-perosn.component.html',
  styleUrls: ['./edit-perosn.component.scss']
})
export class EditPerosnComponent implements OnInit {
  personToEdit: Person = {
    id: 1, name: 'David', email: 'David@gmail.com', age: 20, isAdmin: true,
    hobbies: [
      { name: 'C#', rating: 2 },
      { name: 'VB6', rating: 1 },
      { name: 'Angular', rating: 3 },
      { name: 'Java', rating: 1 },
    ]
  };
  temp = 'A';

  constructor(private fb: FormBuilder) { }

  arr: FormGroup<{
    name: FormControl<string>,
    rating: FormControl<number>
  }>[] = [];

  perosnForm = this.fb.nonNullable.group({
    id: [-1],
    name: ['', [Validators.required, Validators.minLength(2), (e: AbstractControl) => this.validateName(e)]],
    email: ['', [Validators.email]],
    age: [0, [Validators.min(0)]],
    isAdmin: [false],
    hobbies: this.fb.nonNullable.array(this.arr),
  }, { validators: [this.validateAll] });

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
    console.log(control.value)
    const p: Person = control.getRawValue();
    if (p.email.includes('a') && p.name.length > 5) {
      return { "a-&&->-then-5": true };
    }
    return null;
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

  disableEmail() {
    this.perosnForm.controls.email.disable();
  }

  save() {
    // this.personToEdit = this.perosnForm.getRawValue();
  }

}
