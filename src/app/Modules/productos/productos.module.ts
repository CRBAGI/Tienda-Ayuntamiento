import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProvedoresComponent } from './components/provedores/provedores.component';
import { MaterialModule } from 'src/Material/material.module';
import { AgregarComponent } from './components/agregar/agregar.component';


@NgModule({
  declarations: [
    ProductosComponent,
    CategoriaComponent,
    ProvedoresComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule
  ]
})
export class ProductosModule { }
