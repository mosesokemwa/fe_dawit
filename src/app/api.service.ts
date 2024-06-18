import { HttpClient } from '@angular/common/http';
import { ContactForm } from './contactForm';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  baseURL: string = "http://localhost:4000/api/v1";

  constructor(private http: HttpClient) { }

  postContactForm(formData: Partial<ContactForm>): Observable < any > {
    // return this.http.post(this.baseURL + 'contact-form', formData);
    console.log(formData);
    return new Observable();
  }

}
