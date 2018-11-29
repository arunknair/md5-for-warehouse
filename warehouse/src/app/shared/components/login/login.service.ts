import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../../../models/LoginModel';
import {LoggerService} from '../../../common/LoggerService/logger.service';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
              private log: LoggerService) {
  }

  loginUser(msg: LoginModel) {
    const url = 'https://9li1fxbjw2.execute-api.us-east-2.amazonaws.com/dev/login';
    this.log.debug(JSON.stringify(msg));
    return this.http.post(url, JSON.stringify(msg)).toPromise();
  }
}
