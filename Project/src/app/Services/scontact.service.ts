import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Contact } from '../Models/Contact';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class SContactService {

  public contact: Contact = new Contact();

  private Url: string = 'http://localhost:5287/CContact/GetAllContact';
  private Urlsave: string = 'http://localhost:5287/SaveContact';
  private UrlUpdate: string = 'http://localhost:5287/UpdateContact';
  private UrlDelete: string = 'http://localhost:5287/CContact/DeleteContact';
  private UrlUser: string = 'http://localhost:5287/userValidate';

  constructor(private httpClient: HttpClient) { }

  GetAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.Url}`);
  }

  public SaveUser(contact: Contact): Observable<Object> {
    return this.httpClient.post(`${this.Urlsave}`, contact);
  }

  Update(contact: Contact): Observable<Object> {
    const url = `${this.UrlUpdate}/${contact.id_Contact}`;
    return this.httpClient.put(url, contact);
  }


  Delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.UrlDelete}/${id}`);
  }


  login(user: User): Observable<string> {
    return this.httpClient.post(this.UrlUser, user, { responseType: 'text' });
  }



}
