import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';


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
    MatFormFieldModule,
      ],
  exports: [
    MatToolbarModule, 
    MatCardModule, 
    MatButtonModule,
    MatIconModule, 
    MatMenuModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatFormFieldModule,
       ]
    })
    export class MaterialModule { }