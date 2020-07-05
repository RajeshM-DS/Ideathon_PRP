
import { NgModule } from '@angular/core';
import { SectionRoutingModule } from './section-routing.module';
import { Success1Component } from './success1/success1.component';
import { Success2Component } from './success2/success2.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    SectionRoutingModule,  
  ],
  declarations: [Success1Component, Success2Component],
  
})
export class SectionModule { }
