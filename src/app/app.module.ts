import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { BooksService } from './shared/services/books.service';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth.guard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BooksComponent } from './library/books/books.component';
import { BookComponent } from './library/book/book.component';
import { SearchComponent } from './library/search/search.component';
import { LibraryBookComponent } from './library/library-book/library-book.component';
import { LoginComponent } from './user/login/login.component';
import { LoggedInComponent } from './user/logged-in/logged-in.component';
import { UserLibraryComponent } from './user/user-library/user-library.component';
import { UnloggedInComponent } from './user/unlogged-in/unlogged-in.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    SearchComponent,
    RegisterComponent,
    HomePageComponent,
    LoginComponent,
    LoggedInComponent,
    NavigationComponent,
    UserLibraryComponent,
    LibraryBookComponent,
    UnloggedInComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'libary'}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    AppRoutingModule,
    SlickCarouselModule,
    AngularFontAwesomeModule
  ],
  providers: [BooksService, UsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
