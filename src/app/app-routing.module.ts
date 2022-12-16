import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Modules/modules.module').then(m=> m.ModulesModule)
  },
  {
    path : '**',
    redirectTo: 'landing'
  },
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
