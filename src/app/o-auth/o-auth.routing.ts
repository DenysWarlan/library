import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OAuthComponent } from './o-auth.component';
import { NgModule } from '@angular/core';
import { ThankForRegisterComponent } from './thank-for-register/thank-for-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'oauth/start-page', pathMatch: 'full' },
  {
    path: 'oauth',
    component: OAuthComponent,
    children: [
      {
        path: 'start-page',
        component: StartPageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'thanks/:email',
        component: ThankForRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OAuthRouting {}
