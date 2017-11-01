import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserNameComponent } from './user-name/user-name.component';
import { HeaderComponent } from './header/header.component';
import { PasswordComponent } from './password/password.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserNameComponent,
    HeaderComponent,
    PasswordComponent,
    LoginButtonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
