import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { MaterialModule } from 'src/Material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],

})
export class LandingModule { }
