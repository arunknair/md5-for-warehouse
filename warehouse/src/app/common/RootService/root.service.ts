import {Injectable} from '@angular/core';
import {PrivilegeModel} from '../../models/PrivilegeModel';


@Injectable({
  providedIn: 'root'
})
export class RootService {
  loginSuccessfull: boolean;
  privilege = new PrivilegeModel();
  constructor() {
  }
}
