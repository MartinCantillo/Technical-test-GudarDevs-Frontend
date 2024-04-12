import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from 'src/app/Models/Contact';
import { SContactService } from 'src/app/Services/scontact.service';

@Component({
  selector: 'app-cform-save',
  templateUrl: './cform-save.component.html',
  styleUrls: ['./cform-save.component.css']
})
export class CFormSaveComponent {
  contact: Contact = new Contact()
  constructor(private _SContactService: SContactService) { }

  onSubmit() {
    console.log(this.contact);
    this._SContactService.SaveUser(this.contact).subscribe({
      next: (res) => console.log("Contact saved "+res),
      error: (error) => {
        console.log(error);
      },
    });
  }



}



