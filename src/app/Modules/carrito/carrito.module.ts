import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MaterialModule } from 'src/Material/material.module';


@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    MaterialModule
  ]
})
export class CarritoModule { }
