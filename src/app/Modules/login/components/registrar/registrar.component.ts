import { Component, OnInit} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from '@angular/fire/storage';



interface rol {
  value: string;
  viewValue: string;
}

interface rolGroup {
  disabled?: boolean;
  name: string;
  rol: rol[];
}

interface sexo {
  value: string;
  viewValue: string;
}

interface sexoGroup {
  disabled?: boolean;
  name: string;
  sexo: sexo[];
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  hide = true;
  hide2 = true;
   
   fdn? : String
   images : any;
   imagenP: any;
   imageUrls: string[] = [];
   //contar=0;

   // ...
 
  // ...
  

  
  //Formulario
    constructor(private fb: FormBuilder, private http: HttpClient, private storage : Storage) {
      
      this.fdn="";
      this.imagenP='';
      this.images;
     
     }
    
    
  
    

    
    
 

  //Categoria
  rolControl = new FormControl('');
  rolGroups: rolGroup[] = [
    {
      name: 'soy',
      disabled: false,
      rol: [
        {value: 'Comprador', viewValue: 'Comprador'},
        {value: 'Vendedor', viewValue: 'Vendedor'},
        {value: 'Vendedor y comprador', viewValue: 'Vendedor y comprador'},
      ],
    },
  ];
  // 
  sexoControl = new FormControl('sexo');
  sexoGroups: sexoGroup[] = [
    {
          name: 'sexo',
          disabled: false,
          sexo: [
            {value: 'Hombre', viewValue: 'Hombre'},
            {value: 'Mujer', viewValue: 'Mujer'},
          ],
        },
      ];
      
  //calendario

  
  
 

 



  formularioRegistro = this.fb.group({
    nombreP: ['', [Validators.required, Validators.minLength(10)]],
    correo: ['', [Validators.required, Validators.maxLength(500)]],
    rolGroups: ['',Validators.required,],
    contraseña: ['', [Validators.required, Validators.maxLength(500)]],
    confirmarContraseña: ['', [Validators.required, Validators.maxLength(500)]],
    sexoGroups: [this.rolControl, Validators.required,],
    calendario: ['', Validators.required,]
    

  });
  
 
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value; // Obtiene la fecha seleccionada en el datepicker
    
     let dateStr  = selectedDate?.toISOString().substring(0, 10); // Convierte la fecha en formato ISO 8601
    this.fdn=dateStr
    console.log(dateStr)
    // Aquí puedes guardar la fecha en la base de datos
 }
  


  ngOnInit(): void {
    //this.getImages();
  }

  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef= ref(this.storage, `fotodeperfil/${file.name}`)
    this.imagenP= file.name
    uploadBytes(imgRef, file)
    .then(Response=>{
      console.log(Response)
      this.getImages();
      
     
    })
    
    .catch(error=>console.log(error))
    
  }
  
  getImages(){
    const imagesRef = ref(this.storage, `fotodeperfil/${this.imagenP}`);
    listAll(imagesRef)
    .then(async Response=>{
      const url = await getDownloadURL(imagesRef);
      this.images = url
      console.log(this.images)

    })
  }





  submit() {

    this.http.post('http://localhost:8080/usuario/Users',
     {
      nombre:this.formularioRegistro.value.nombreP,
      correo:this.formularioRegistro.value.correo,
      contraseña:this.formularioRegistro.value.contraseña,
      rol: this.rolControl.getRawValue(),
      sexo: this.sexoControl.getRawValue(),
      FechaDeNacimiento: this.fdn,
      fotoDePerfil : this.images
      
      
      
      
     // const fecha = new Date(this.formularioRegistro.value.fechaN)
      //fechaN: this.FeNa.value.myDateControl
     }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
   

  
    
  }

}
