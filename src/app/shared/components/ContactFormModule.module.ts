import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponentComponent } from './contact-form-component/contact-form-component.component';
import { MaterialModule } from '../../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactFormComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    ContactFormComponentComponent
  ]
})
export class ContactFormModule { }
