import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerosnComponent } from './edit-perosn.component';

describe('EditPerosnComponent', () => {
  let component: EditPerosnComponent;
  let fixture: ComponentFixture<EditPerosnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPerosnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPerosnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
