import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { EdicproducComponent } from './components/editproduc/edicproduc.component';
import { LugardepruebasComponent } from './components/lugardepruebas/lugardepruebas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProvedoresComponent } from './components/provedores/provedores.component';
import { VerproductoComponent } from './components/verproducto/verproducto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'prueba', component: LugardepruebasComponent},
      {path: 'categoria', component: CategoriaComponent},
      {path: 'provedores', component: ProvedoresComponent},
      {path: 'misproductos', component: ProductosComponent},
      {path: 'agregar', component: AgregarComponent},
      {path: 'editar', component: EdicproducComponent},
      {path: 'ver', component: VerproductoComponent},

      
      {path: '', component: ProductosComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
