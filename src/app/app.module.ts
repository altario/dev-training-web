import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import {
  reducerToken,
  reducerProvider,
  metaReducers,
  effects,
  CustomRouterStateSerializer
} from 'shared/ngrx/index';
import {
  LoopBackConfig,
  SDKBrowserModule,
  InternalStorage,
  StorageBrowser,
  LOOPBACK_GUARDS_PROVIDERS
} from 'shared/sdk';
import { OrmModule } from 'shared/sdk/orm';

import { environment } from 'environment';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

LoopBackConfig.setBaseURL(environment.base_url);
LoopBackConfig.setApiVersion(environment.api_version);
LoopBackConfig.setAuthPrefix(environment.auth_prefix);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducerToken, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    StoreRouterConnectingModule,
    EffectsModule.forRoot(effects),
    OrmModule.forRoot(),
    SDKBrowserModule.forRoot({
      provide: InternalStorage,
      useClass: StorageBrowser
    })
  ],
  providers: [
    LOOPBACK_GUARDS_PROVIDERS,
    reducerProvider,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
