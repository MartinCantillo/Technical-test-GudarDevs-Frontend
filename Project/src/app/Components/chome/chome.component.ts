import { Component } from '@angular/core';

import { Contact } from 'src/app/Models/Contact';
import { SContactService } from 'src/app/Services/scontact.service';
@Component({
  selector: 'app-chome',
  templateUrl: './chome.component.html',
  styleUrls: ['./chome.component.css']
})
export class CHomeComponent {

  contact: Contact = new Contact();
  contacts: Contact[] = [];



  constructor(private _SContactService: SContactService) {
    this.loadContacts();
  }

  ngOnInit() {

  }

  private loadContacts() {
    this._SContactService.GetAll().subscribe(
      (data) => {
        this.contacts = data;
      }
    );
  }


}
