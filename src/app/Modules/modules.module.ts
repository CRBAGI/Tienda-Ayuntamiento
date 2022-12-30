import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { MaterialModule } from '../../Material/material.module';
import { LandingComponent } from './landing/components/landing/landing.component';
import { SwiperModule } from "swiper/angular";
import { CarritoComponent } from './carrito/components/carrito/carrito.component';




@NgModule({
  declarations: [
  LandingComponent,
  CarritoComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialModule, 
    SwiperModule,

  ]
})
export class ModulesModule { }
