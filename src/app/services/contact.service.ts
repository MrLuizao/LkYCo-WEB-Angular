import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiKey = 'AIzaSyACi4bQvO0BhjhWZ5ENA_wpeqwLYcoYUTQ';

  private url = 'https://lkyco-2a58b.firebaseio.com';
  

  constructor( private http: HttpClient) {

  }

  postContactForm(user: UserModel){

    return this.http.post(`${this.url}/users.json`, user);
  }

}
