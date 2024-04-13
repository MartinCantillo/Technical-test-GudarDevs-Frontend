import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(!!token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
