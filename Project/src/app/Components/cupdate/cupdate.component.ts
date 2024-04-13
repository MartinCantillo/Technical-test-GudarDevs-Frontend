import { Component } from '@angular/core';
import { Contact } from 'src/app/Models/Contact';
import { SContactService } from 'src/app/Services/scontact.service';

@Component({
  selector: 'app-cupdate',
  templateUrl: './cupdate.component.html',
  styleUrls: ['./cupdate.component.css']
})
export class CUpdateComponent {

  constructor(public  _SContactService: SContactService) { }

  onSubmit() {
    console.log(this._SContactService.contact);
    this._SContactService.Update(this._SContactService.contact).subscribe({
      next: (res) => console.log("Contact sent "+res),
      error: (error) => {
        console.log(error);
      },
    });
  }
}
