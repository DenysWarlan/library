import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-thank-for-register',
  templateUrl: './thank-for-register.component.html',
  styleUrls: ['./thank-for-register.component.scss'],
})
export class ThankForRegisterComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/oauth/login'], {
        relativeTo: this.route,
      });
    }, 10000);
  }

  login() {
    this.router.navigate(['/oauth/login'], {
      relativeTo: this.route,
    });
  }
}
