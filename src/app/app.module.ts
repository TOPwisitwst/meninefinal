import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Page1Component } from './page1/page1.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Page1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot ([
      { path: '',component: LoginComponent },
      { path: 'login',component: LoginComponent},
      { path: 'main',component: MainComponent },
      { path: '1',component: Page1Component }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
