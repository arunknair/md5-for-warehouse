import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {PrivilegeModel} from '../../models/PrivilegeModel';
import {RootService} from '../../common/RootService/root.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;

  clicked: boolean;
  privilege = new PrivilegeModel();

  constructor(private rootService: RootService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
    this.privilege = this.rootService.privilege;
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
