import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../modules/material.module';
import { RouterModule } from '@angular/router';
import { ContactFormComponentComponent } from './components/contact-form-component/contact-form-component.component';
import { ContactFormModule } from './components/ContactFormModule.module';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,

  ],
  exports:[
    NavbarComponent,
    ContactFormModule
  ]
})
export class SharedModule { }
