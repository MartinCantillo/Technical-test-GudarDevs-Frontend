import { Component } from '@angular/core';
import { AuthServiceService } from './Services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authServiceService: AuthServiceService) {

  }
  logout() {
    this.authServiceService.logout();
  }
  title = 'Project';
}
