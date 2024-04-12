import { Component } from '@angular/core';
import { AdditionalField } from 'src/app/Models/AdditionalField';
import { Contact } from 'src/app/Models/Contact';
import { ContactType } from 'src/app/Models/ContactType';
import { SContactService } from 'src/app/Services/scontact.service';

@Component({
  selector: 'app-chome',
  templateUrl: './chome.component.html',
  styleUrls: ['./chome.component.css']
})
export class CHomeComponent {
  //Models
  additionalField: AdditionalField = new AdditionalField();
  contact: Contact = new Contact();
  contactType: ContactType = new ContactType();
  //list of contacts
  contacts: Contact[] = [];
  constructor(private _SContactService: SContactService) {
    this.LoadContacts();
  }

  private LoadContacts() {
    this._SContactService.GetAll().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda , aqui relleno el vector
      (Data) => {
        this.contacts = Data;
      }
    );
  }

}
