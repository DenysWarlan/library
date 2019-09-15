import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';

import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  charsCount = 5;
  isShowAlert = false;
  form: FormGroup;
  message: Message;
  constructor(
    private router: Router,
    private usersService: UsersService,
    private authservice: AuthService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.message = new Message('danger', '');
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'You can Login!',
            type: 'success'
          });
        } else if (params['accessDenided']) {
          this.showMessage({
            text: 'You need login or create new account!',
            type: 'warning'
          });
        }
      });
    this.form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', [Validators.required, Validators.minLength(this.charsCount)]),
    });
  }
  private showMessage(message: Message) {
    this.message = message;
    this.isShowAlert = true;
    window.setTimeout(() => {
      this.message.text = '';
      this.isShowAlert = false;
    }, 5000);
  }

  loginUser() {
    const emailUser = this.form.get('email').value;
    const pass = this.form.get('pass').value;
    this.usersService.getUserByEmail(emailUser).subscribe((user: User) => {
      if (user) {
        if (pass === user['pass']) {
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authservice.login();
          this.router.navigate([`${user['username']}`]);
        } else {
          this.showMessage({
            text: 'Incorrect login or password!',
            type: 'danger'
          });
        }
      } else {
        this.showMessage({
          text: 'User does not exist!',
          type: 'danger'
        });
      }
     });
  }
}
