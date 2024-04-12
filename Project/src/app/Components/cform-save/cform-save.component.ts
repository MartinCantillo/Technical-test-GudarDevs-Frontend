import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from 'src/app/Models/Contact';

@Component({
  selector: 'app-cform-save',
  templateUrl: './cform-save.component.html',
  styleUrls: ['./cform-save.component.css']
})
export class CFormSaveComponent {
  contact: Contact = new Contact()
  constructor() { }

  onSubmit() {
    console.log(this.contact);
    // Aquí puedes enviar los datos del contacto
  }
  showAdditionalFields(): boolean {
    // Muestra los campos adicionales solo si el tipo de contacto es Organización Pública o Privada
    return this.contact.ctype === 2 || this.contact.ctype === 3;
  }

}



