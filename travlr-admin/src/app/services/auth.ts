import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post<any>(`${this.apiBaseUrl}/login`, user);
  }

  register(user: any) {
    return this.http.post<any>(`${this.apiBaseUrl}/register`, user);
  }

  saveToken(token: string) {
    localStorage.setItem('travlr-token', token);
  }

  getToken() {
    return localStorage.getItem('travlr-token');
  }

  logout() {
    localStorage.removeItem('travlr-token');
    window.location.href = '/login';
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}