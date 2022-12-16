import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProvedoresComponent } from './components/provedores/provedores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'categoria', component: CategoriaComponent},
      {path: 'provedores', component: ProvedoresComponent},
      {path: 'agregar', component: AgregarComponent},
      
      {path: '', component: ProductosComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
