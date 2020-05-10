import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './reducers/o-auth/auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./o-auth/o-auth.module').then((m) => m.AuthModule),
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'user/:id', canActivate: [AuthGuard], component: UserComponent },
  { path: 'admin/:id', canActivate: [AuthGuard], component: AdminComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
