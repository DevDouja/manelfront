import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
 
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core'; 
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatStepperModule, MatInputModule, MatButtonModule,MatButtonToggleModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
