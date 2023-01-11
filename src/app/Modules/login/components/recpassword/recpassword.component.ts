import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-recpassword',
  templateUrl: './recpassword.component.html',
  styleUrls: ['./recpassword.component.css']
})
export class RecpasswordComponent implements OnInit {
  hide = true;
  //Formulario
    constructor(private fb: FormBuilder) { }
  
    formularioRecuperar = this.fb.group({
      correo: ['', [Validators.required, Validators.maxLength(500)]],
    });
    
  submit() {

  }

  ngOnInit(): void {
  }

}
