import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { Router } from '@angular/router';

import { User } from './../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }
  charsCount = 5;
  formdata = {};
  isSubmited = false;
  user: User | undefined;
  form: FormGroup;
  isShowAlert = false;
  message: Message;

  ngOnInit() {
    this.form = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(this.charsCount)]),
      username: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required])
    });
  }
  submitForm() {
    const emailUser = this.form.get('email').value;
    this.usersService.getUserByEmail(emailUser).subscribe((user: User) => {
      if (user) {
        this.showMessage({
          text: 'email or ',
          type: 'danger'
        });
      } else {
        this.usersService.registerUser(this.form.value).subscribe((data) => {
          this.router.navigate(['/'], {
            queryParams: {
              nowCanLogin: true
            }
          });
        });
      }
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
}
