import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRootComponent } from './products-root.component';

describe('ProductsRootComponent', () => {
  let component: ProductsRootComponent;
  let fixture: ComponentFixture<ProductsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
