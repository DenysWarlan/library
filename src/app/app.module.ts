import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { AppState, reducerT } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppMaterialModule } from './material.module';
import { AppBootstrapModule } from './bootstrap.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appEfects, AppStoreModule } from './reducers/app-store.module';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru-UA';
import { localStorageSync } from 'ngrx-store-localstorage';
import { NavigationComponent } from './navigation/navigation.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

registerLocaleData(localeRu);

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['oAuth', 'user'], rehydrate: true })(
    reducer
  );
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, NavigationComponent, UserComponent, AdminComponent],
  imports: [
    AppMaterialModule,
    AppBootstrapModule,
    BrowserModule.withServerTransition({ appId: 'libary' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStoreModule,
    StoreModule.forRoot(reducerT, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(appEfects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
