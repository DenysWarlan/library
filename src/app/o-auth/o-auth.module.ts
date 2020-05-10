import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartPageComponent } from './start-page/start-page.component';
import { OAuthRouting } from './o-auth.routing';
import { OAuthComponent } from './o-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ThankForRegisterComponent } from './thank-for-register/thank-for-register.component';

@NgModule({
  imports: [OAuthRouting, ReactiveFormsModule, AppMaterialModule, CommonModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    StartPageComponent,
    OAuthComponent,
    ThankForRegisterComponent,
  ],
  exports: [OAuthComponent],
})
export class AuthModule {}
