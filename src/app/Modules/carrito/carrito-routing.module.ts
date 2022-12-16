import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
 {
  path: 'Carrito', component: CarritoComponent
 },
 {
  path: '**', redirectTo: 'Carrito'
 }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
