import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactForm } from '@/app/contactForm';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer ',
    'Access-Control-Allow-Origin': 'localhost:4200',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Referer': 'localhost:4200',
    'x-api-key': environment.apiKey
  });

  getContactForm(): Observable<any> {
    return this.http.get(
      this.apiUrl + 'api/form',
      { headers: this.headers }
    );
  }


  postContactForm(formData: Partial<ContactForm>): Observable<any> {
    return this.http.post(
      this.apiUrl + 'api/form',
      formData,
      { headers: this.headers }
    );
  }
}
