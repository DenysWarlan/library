import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './user/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserLibraryComponent } from './user/user-library/user-library.component';
import { UnloggedInComponent } from './user/unlogged-in/unlogged-in.component';
import { LoggedInComponent } from './user/logged-in/logged-in.component';

const appRoutes: Routes = [
    { path: '', component: UnloggedInComponent },
    { path: 'register', component: RegisterComponent },
    { path: ':username', canActivate: [AuthGuard], component: LoggedInComponent },
    { path: ':username/library', canActivate: [AuthGuard], component: UserLibraryComponent }
];
@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
