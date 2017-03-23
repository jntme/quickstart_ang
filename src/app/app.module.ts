import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {PatientDetailComponent} from './patient-detail.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule
  ],
  declarations: [
    AppComponent,
    PatientDetailComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
