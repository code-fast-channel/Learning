import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  private apiUrl = environment.apiUrl; // Replace with your API URL

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}user/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}user/register`, data);
  }
}
