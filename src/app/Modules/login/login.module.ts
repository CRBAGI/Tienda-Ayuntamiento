import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RecpasswordComponent } from './components/recpassword/recpassword.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    RecpasswordComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LoginModule { }
