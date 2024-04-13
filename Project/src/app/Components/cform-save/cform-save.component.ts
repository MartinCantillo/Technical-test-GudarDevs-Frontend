import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Contact } from 'src/app/Models/Contact';
import { SContactService } from 'src/app/Services/scontact.service';

@Component({
  selector: 'app-cform-save',
  templateUrl: './cform-save.component.html',
  styleUrls: ['./cform-save.component.css']
})
export class CFormSaveComponent {
  contact: Contact = new Contact()
  constructor(private _SContactService: SContactService,private router: Router) { }

  onSubmit() {
    console.log(this.contact);
    this._SContactService.SaveUser(this.contact).subscribe({
      next: (res) =>this.router.navigate(['/Home']),
      error: (error) => {
        console.log(error);
      },
    });
  }
  



}



