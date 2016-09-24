import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { firebaseConfig } from './firebaseProject';

import { AppComponent, PageNotFoundComponent } from './app.component';

import { AngularFireModule, 
  FIREBASE_PROVIDERS,
  AngularFire,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';

import { AppRouting } from './app.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AuthModule,
    DashModule,
    AppRouting,
    CommonModule
   ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
