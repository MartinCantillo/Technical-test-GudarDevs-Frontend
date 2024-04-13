import { Component } from '@angular/core';
import { Router } from '@angular/router';

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




  constructor(private _SContactService: SContactService, private router: Router) {
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
  update(contact: Contact) {
    this._SContactService.contact = contact;
    this.router.navigate(['/Update']);
  }
  onDelete(id: number) {
    if (confirm('¿Are you sure?')) {
      this._SContactService.Delete(id).subscribe({
       next: () => {
        console.log('Contact deleted successfully');

      },

      error: (error) => {
        console.log(error);
      },
      }
    );
    this.router.navigate(['/Form']);

    }

  }

}
