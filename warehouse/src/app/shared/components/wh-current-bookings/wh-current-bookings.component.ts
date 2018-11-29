import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wh-current-bookings',
  templateUrl: './wh-current-bookings.component.html',
  styleUrls: ['./wh-current-bookings.component.scss']
})
export class WhCurrentBookingsComponent implements OnInit {
    public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor() { }

  ngOnInit() {
  }

}
