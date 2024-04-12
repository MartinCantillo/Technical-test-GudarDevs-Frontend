import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Models/Contact';

@Injectable({
  providedIn: 'root'
})
export class SContactService {
  private Url: string = 'http://localhost:5287/CContact/GetAllContact';
  constructor(private httpClient: HttpClient) {

  }
  //Method to get all baches
  GetAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.Url}`);
  }
}
