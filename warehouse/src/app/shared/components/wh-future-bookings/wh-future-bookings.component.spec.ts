import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhFutureBookingsComponent } from './wh-future-bookings.component';

describe('WhFutureBookingsComponent', () => {
  let component: WhFutureBookingsComponent;
  let fixture: ComponentFixture<WhFutureBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhFutureBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhFutureBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
