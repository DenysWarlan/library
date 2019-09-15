import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.less']
})
export class LoggedInComponent implements OnInit {
  constructor(private authService: AuthService) { }
  name: string;
  isAuthentication = false;

  ngOnInit() {
    this.isAuthentication = this.authService.isLoggedIn();
    if (this.isAuthentication) {
      const user: User = JSON.parse(window.localStorage.getItem('user'));
      this.name = user.username;
    }
  }
}
