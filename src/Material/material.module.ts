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
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


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
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //MatMomentDateModule,
   
    
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
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //MatMomentDateModule,
       ]
    })
    export class MaterialModule { }