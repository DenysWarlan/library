import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  constructor(private authService: AuthService) { }
  name: string;
  isAuthentication: boolean;

  ngOnInit() {
    this.checkisAuthentication();
  }

  checkisAuthentication() {
    
  }

}
