import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { MaterialModule } from '../../Material/material.module';
import { LandingComponent } from './landing/components/landing/landing.component';



@NgModule({
  declarations: [
  LandingComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialModule,
  ]
})
export class ModulesModule { }
