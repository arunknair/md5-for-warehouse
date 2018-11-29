import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {LoggerService} from '../../../common/LoggerService/logger.service';
import {RootService} from '../../../common/RootService/root.service';
import {LoginModel} from '../../../models/LoginModel';
import {BaseModel} from '../../../models/BaseModel';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    username = new FormControl('digv');
    password = new FormControl('pass');

    constructor(private loginService: LoginService,
                private log: LoggerService,
                private router: Router,
                private rootService: RootService) {
        this.loginForm = new FormGroup({
            username: this.username,
            password: this.password
        });
    }

    ngOnInit() {
    }

    loginUser() {
        this.log.debug('Login button clicked');
        this.log.debug('Username : ' + this.username.value);
        this.log.debug('Password : ' + this.password.value);
        const msg = new LoginModel();
        msg.userName = this.username.value;
        msg.password = this.password.value;
        this.loginService.loginUser(msg)
            .then((resp) => {
                this.log.debug('Success Response from Login Request');
                this.log.debug(resp);
                const data = <BaseModel>resp;
                /**********************************************************************/
                if (this.username.value === 'arun') {
                    data.custType = 1; // Farmer
                } else if (this.username.value === 'digv') {
                    data.custType = 2; // Warehouse
                }
                /**********************************************************************/
                this.rootService.privilege.custType = data.custType;
                this.log.debug(data.responseMessage);
                this.rootService.loginSuccessfull = true;
                this.log.debug('Redirecting to Dashboard');
                this.router.navigate(['/main-page/dashboards']);
            })
            .catch((err) => {
                this.log.debug('Error Response from Login Request');
                this.log.debug(err);
            });
    }

    signUpUser() {
        this.log.debug('SignUp User action clicked');
        this.router.navigate(['/register-user']);
    }
}
