import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/Material/material.module';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  

  //eso estaba
  {
    path : 'landing', 
    component: LandingComponent
   },
    {
      path : '**',
      redirectTo: 'landing'
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
