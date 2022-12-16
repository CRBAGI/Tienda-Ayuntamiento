import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


 @NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
      ],
  exports: [
    MatToolbarModule, 
    MatCardModule, 
    MatButtonModule,
    MatIconModule, 
    MatMenuModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
       ]
    })
    export class MaterialModule { }