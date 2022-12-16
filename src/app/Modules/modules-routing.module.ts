import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/components/carrito/carrito.component';
import { LandingComponent } from './landing/components/landing/landing.component';
import { LoginComponent } from './login/components/login/login.component';
import { ProductosComponent } from './productos/components/productos/productos.component';

const routes: Routes = [
{
  path: '',
  children: [
    {path: 'Carrito', component: CarritoComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Productos', component: ProductosComponent},
    {path: '', component: LandingComponent}
  ]
},
{
  path: '',
  loadChildren: () => import('./login/login.module').then(m=> m.LoginModule)
},
{
  path: '',
  loadChildren: () => import('./productos/productos.module').then(m=> m.ProductosModule)
},
{
  path : '**',
  redirectTo: 'landing'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
