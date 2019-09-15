import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  isAuthentication: boolean;
  @Input()
  name: string;
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
  this.isAuthentication = this.authService.isLoggedIn();
  if (this.isAuthentication) {
    const user: User = JSON.parse(window.localStorage.getItem('user'));
    this.name = user.username;
  }

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
