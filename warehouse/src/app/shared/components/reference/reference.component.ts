import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
    public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor() { }

  ngOnInit() {
  }

}
