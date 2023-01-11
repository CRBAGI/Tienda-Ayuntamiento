import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { SwiperComponent } from "swiper/angular";


// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  
  ngOnInit(): void {
  }

  
}

export class SelectOptgroupExample {
  
}
