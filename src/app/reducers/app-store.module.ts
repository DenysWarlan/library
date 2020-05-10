import { OAuthEffects } from './o-auth/o-auth.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServices } from './user/user.services';
import { reducerP } from './index';
import { UserEffects } from './user/user.effects';
import { AuthServices } from './o-auth/o-auth.services';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './o-auth/auth.guard';

export const appEfects = [OAuthEffects, UserEffects];

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [UserServices, AuthServices, AuthGuard, reducerP],
})
export class AppStoreModule {}
