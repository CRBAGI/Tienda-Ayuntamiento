import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from '@angular/fire/storage';
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
  selector: 'app-lugardepruebas',
  templateUrl: './lugardepruebas.component.html',
  styleUrls: ['./lugardepruebas.component.css']
})
export class LugardepruebasComponent implements OnInit {
  public indiceSeleccionado = 0;
  public cont = 0;
  public border: number = 0;
  images : string[];
  imagenP: string;
  imagenM: string[];
  imageUrls: string[] = [];
  url1: string[];

  constructor(private fb: FormBuilder, private storage : Storage) { 
    this.images=[];
    this.imagenP="";
    this.imagenM=[];
    this.imageUrls;
    this.url1=[];
    
  }

  formularioCantidad = this.fb.group({
    cantidad: ['4', [Validators.required, Validators.minLength(100)]],
    descripcion: ['Aqui va la descripccion', [Validators.required, Validators.maxLength(500)]],
  });

  formularioAgregar = this.fb.group({
    nombreP: ['', [Validators.required, Validators.minLength(10)]],
    descripcion: ['', [Validators.required, Validators.maxLength(500)]],
    categoria: ['',Validators.required,],
    marca: ['',Validators.required,],
    precio: ['',Validators.required,],
    cantidad: ['',Validators.required,],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]],
  });


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
    this.getImages();
  }

  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef= ref(this.storage, `images/${file.name}`)
    this.imagenP= file.name
    uploadBytes(imgRef, file)
    .then(Response=>{
      console.log(Response)
      this.getImages();
    })
    
    .catch(error=>console.log(error))
    
  }

  getImages(){
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef)
    .then(async Response=>{
      console.log(Response);
      this.imageUrls=[];
      this.imagenM=[];
      
     
      for (let item of Response.items){
        const url = await getDownloadURL(item);
        this.imageUrls.push(url)
        console.log(this.imageUrls)
        
          
      
      }
      const url1=this.imageUrls[0]
      this.imagenM.push(url1)
      
    })
    .catch(error=> console.log(error))

  }

  deleteImage(index: number) {
    const imageUrl = this.imageUrls[index];
    this.imageUrls.splice(index, 1);
    this.imagenM.splice(0);
    // Eliminar la imagen del almacenamiento aquí
    const refe = ref(this.storage, imageUrl);
    
    
    deleteObject(refe).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });

  }

  selectImage(index: number) {
    
    this.imagenM=[];
    const imagenP = this.imageUrls[index];
    
    this.imagenM.push(imagenP)
    this.border=1;
    console.log("url que toma", imagenP)
   

  }
  imagenprincipal(){
    this.imagenM=[];
    const url1=this.imageUrls[0]
    this.imagenM.push(url1)

  }

  submit() {

  }
}


