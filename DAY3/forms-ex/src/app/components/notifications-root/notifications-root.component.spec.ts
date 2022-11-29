import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsRootComponent } from './notifications-root.component';

describe('NotificationsRootComponent', () => {
  let component: NotificationsRootComponent;
  let fixture: ComponentFixture<NotificationsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
