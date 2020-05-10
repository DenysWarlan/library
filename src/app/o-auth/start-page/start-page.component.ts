import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  register() {
    this.router.navigate(['/oauth/register'], {
      relativeTo: this.route,
    });
  }
  login() {
    this.router.navigate(['/oauth/login'], {
      relativeTo: this.route,
    });
  }
}
