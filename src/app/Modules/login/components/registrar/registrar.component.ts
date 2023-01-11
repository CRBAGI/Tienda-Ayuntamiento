import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {FormGroup, FormControl} from '@angular/forms';

interface rol {
  value: string;
  viewValue: string;
}

interface rolGroup {
  disabled?: boolean;
  name: string;
  rol: rol[];
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  hide = true;
  //Formulario
    constructor(private fb: FormBuilder) { }
  
    formularioRegistro = this.fb.group({
      nombreP: ['', [Validators.required, Validators.minLength(10)]],
      correo: ['', [Validators.required, Validators.maxLength(500)]],
      rol: ['',Validators.required,],
      contraseña: ['', [Validators.required, Validators.maxLength(500)]],
      confirmarContraseña: ['', [Validators.required, Validators.maxLength(500)]],
      fechaN: ['2/2/1990', Validators.required,]

    });
    
  submit() {

  }

  //Categoria
  rolControl = new FormControl('');
  rolGroups: rolGroup[] = [
{
      name: 'soy',
      disabled: false,
      rol: [
        {value: 'Comprador-0', viewValue: 'Comprador'},
        {value: 'Vendedor-1', viewValue: 'Vendedor'},
        {value: 'Vendedor y comprador-2', viewValue: 'Vendedor y comprador'},
      ],
    },
  ];
  //calendario
  startDate = new Date(1990, 0, 1);
  ngOnInit(): void {
  }

}
