import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  //Formulario
    constructor(private fb: FormBuilder) { }
  
    formularioLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.maxLength(500)]],
      contraseña: ['', [Validators.required, Validators.maxLength(500)]],
    });
    
  submit() {

  }
  ngOnInit(): void {
  }

}
