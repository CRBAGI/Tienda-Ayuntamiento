import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Storage, ref, uploadBytes, listAll, getDownloadURL, deleteObject} from '@angular/fire/storage';





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
  selector: 'app-edicproduc',
  templateUrl: './edicproduc.component.html',
  styleUrls: ['./edicproduc.component.css']
})
export class EdicproducComponent implements OnInit {

  public border: number = 0;
  images : string[];
  imagenP: string[];
  imagenM: string[];
  imageUrls: string[] = [];
  url1: string[];
//Formulario
constructor(private fb: FormBuilder,  private storage : Storage) { 
    
    this.images=[];
    this.imagenP=[];
    this.imagenM=[];
    this.imageUrls;
    this.url1=[];
}

formularioEditar = this.fb.group({
  nombreP: ['', [Validators.required, Validators.minLength(100)]],
  descripcion: ['', [Validators.required, Validators.maxLength(500)]],
  categoria: ['',Validators.required,],
  marca: ['',Validators.required,Validators.maxLength(500)],
  precio: ['',Validators.required,],
  cantidad: ['',Validators.required,],
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
    this.getImages();
  }
  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef= ref(this.storage, `images/${file.name}`)

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
        this.imageUrls.push("https://firebasestorage.googleapis.com/v0/b/tiendafront-2b16d.appspot.com/o/images%2Farmas.png?alt=media&token=3bf27c12-5a3d-42cf-b804-f63d29f04cef")
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
    this.imagenP=[];
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
}
