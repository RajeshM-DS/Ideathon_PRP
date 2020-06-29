import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './section/dashboard/dashboard.component';
import { Page1Component } from './section/page1/page1.component';
import { Page2Component } from './section/page2/page2.component';
import { SectionModule } from './section/section.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SectionModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
