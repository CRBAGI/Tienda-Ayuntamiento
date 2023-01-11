import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { MaterialModule } from '../../Material/material.module';
import { LandingComponent } from './landing/components/landing/landing.component';
import { SwiperModule } from "swiper/angular";
import { CarritoComponent } from './carrito/components/carrito/carrito.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
  LandingComponent,
  CarritoComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialModule, 
    SharedModule,
    SwiperModule,

  ]
})
export class ModulesModule { }
