import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ContactService } from '../../../pages/home/view-two/contact.service';

@Component({
  selector: 'app-contact-form-component',
  templateUrl: './contact-form-component.component.html',
  styleUrls: ['./contact-form-component.component.scss']
})
export class ContactFormComponentComponent {

  //input
  @Input() quantity: any = 10;

  //init form
  formContact = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-z0-9]+$/i),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '+',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^[\d ()+-]+$/),
      ],
    ],
    message: ['', [Validators.required, Validators.maxLength(this.quantity)]],
  });

  constructor(private fb: FormBuilder, private sc: ContactService) {}

  //send data by http
  SendaData() {
    if (this.formContact.valid) {
      const contact = this.formContact.value;
      try {
        this.sc.PostContactForm(contact).subscribe(rspt => {
          console.log(rspt);
        });
        alert('Formulario enviado');
        this.formContact.reset();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Error en el formulario');
    }
  }
}
