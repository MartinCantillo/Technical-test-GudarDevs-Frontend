import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Models/Contact';

@Injectable({
  providedIn: 'root'
})
export class SContactService {
  private Url: string = 'http://localhost:5287/CContact/GetAllContact';
  private Urlsave: string = 'http://localhost:5287/SaveContact';


  constructor(private httpClient: HttpClient) {

  }

  GetAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.Url}`);
  }

  public SaveUser(contact: Contact): Observable<Object> {
    return this.httpClient.post(`${this.Urlsave}`, contact);
  }
}
