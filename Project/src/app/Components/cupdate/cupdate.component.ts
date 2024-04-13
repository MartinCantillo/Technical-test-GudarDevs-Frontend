import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/Models/Contact';
import { SContactService } from 'src/app/Services/scontact.service';

@Component({
  selector: 'app-cupdate',
  templateUrl: './cupdate.component.html',
  styleUrls: ['./cupdate.component.css']
})
export class CUpdateComponent {

  constructor(public _SContactService: SContactService, private router: Router) { }

  onSubmit() {
    // console.log(this._SContactService.contact);
    this._SContactService.Update(this._SContactService.contact).subscribe({
      next: (res) => this.router.navigate(['/Home']),
      error: (error) => {
        console.log(error);
      },

    });
    this.router.navigate(['/Home']);
  }
}
