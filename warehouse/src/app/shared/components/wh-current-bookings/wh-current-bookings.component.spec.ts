import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhCurrentBookingsComponent } from './wh-current-bookings.component';

describe('WhCurrentBookingsComponent', () => {
  let component: WhCurrentBookingsComponent;
  let fixture: ComponentFixture<WhCurrentBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhCurrentBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhCurrentBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
