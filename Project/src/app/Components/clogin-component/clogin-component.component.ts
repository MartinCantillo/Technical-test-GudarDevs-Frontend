import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { SContactService } from 'src/app/Services/scontact.service';

@Component({
  selector: 'app-clogin-component',
  templateUrl: './clogin-component.component.html',
  styleUrls: ['./clogin-component.component.css']
})
export class CloginComponentComponent {

  user: User = new User();
  constructor(private contactService: SContactService, private router: Router) { }
  login() {
    console.log(this.user.username);
    this.contactService.login(this.user).subscribe({
      next: (token: string) => {
       // console.log("token" + token);
        localStorage.setItem('token', token);
        this.router.navigate(['/Home']);
      },
      error: (error) => {
        console.log("Error: " + JSON.stringify(error));
       alert("User not found");
      }
    });
  }

}
