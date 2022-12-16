import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/components/landing/landing.component';
import { RecpasswordComponent } from './components/recpassword/recpassword.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  //esto no estaba borrar si es necesario

  {
    path: '',
    children: [
      {path: 'registrar', component: RegistrarComponent},
      {path: 'recpassword', component: RecpasswordComponent},
      {path: '', component: LandingComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
