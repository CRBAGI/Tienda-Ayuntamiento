import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProvedoresComponent } from './components/provedores/provedores.component';
import { MaterialModule } from 'src/Material/material.module';
import { AgregarComponent } from './components/agregar/agregar.component';
import { VerproductoComponent } from './components/verproducto/verproducto.component';
import { EdicproducComponent } from './components/editproduc/edicproduc.component';
import { SwiperModule } from "swiper/angular";



@NgModule({
  declarations: [
    ProductosComponent,
    CategoriaComponent,
    ProvedoresComponent,
    AgregarComponent,
    VerproductoComponent,
    EdicproducComponent,

  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    SwiperModule
  ]
})
export class ProductosModule { }
