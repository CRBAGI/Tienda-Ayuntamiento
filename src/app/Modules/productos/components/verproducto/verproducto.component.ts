import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-verproducto',
  templateUrl: './verproducto.component.html',
  styleUrls: ['./verproducto.component.css']
})
export class VerproductoComponent implements OnInit {

//Formulario
constructor(private fb: FormBuilder) { }

formularioCantidad = this.fb.group({
  cantidad: ['4', [Validators.required, Validators.minLength(100)]],
  descripcion: ['Aqui va la descripccion', [Validators.required, Validators.maxLength(500)]],
});

submit() {

}

  ngOnInit(): void {
  }

}
