import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {FormControl} from '@angular/forms';

interface Categoria {
  value: string;
  viewValue: string;
}

interface categoriaGroup {
  disabled?: boolean;
  name: string;
  categoria: Categoria[];
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  hide = true;
//Formulario
  constructor(private fb: FormBuilder) { }

  formularioContacto = this.fb.group({
    nombreP: ['', [Validators.required, Validators.minLength(10)]],
    descripcion: ['', [Validators.required, Validators.maxLength(500)]],
    categoria: ['moda',Validators.required,],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]],
  });

  submit() {

  }

  //Categoria
  categoriaControl = new FormControl('');
  categoriaGroups: categoriaGroup[] = [
    {
      name: 'Moda',
      categoria: [
        {value: 'Moda-0', viewValue: 'Moda'},
      ],
    },
    {
      name: 'Juegos',
      categoria: [
        {value: 'Juegos-1', viewValue: 'Juegos'},
      ],
    },
    {
      name: 'Tecnologias',
      disabled: false,
      categoria: [
        {value: 'Telefonos-2', viewValue: 'Telefonos'},
        {value: 'Camaras y accesorios-3', viewValue: 'Camaras y accesorios'},
        {value: 'Electronica-4', viewValue: 'Electronica'},
      ],
    },
    {
      name: 'Computadoras',
      categoria: [
        {value: 'PC-5', viewValue: 'PC'},
        {value: 'LAPTOPS-6', viewValue: 'Laptops'},
      ],
    },
    {
      name: 'Juguetes',
      categoria: [
        {value: 'Juguetes-7', viewValue: 'Juguetes'},
      ],
    },
  ];


  ngOnInit(): void {
  }

}


