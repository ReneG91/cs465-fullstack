import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/trips`);
  }

  getTrip(id: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/trips/${id}`);
  }

  addTrip(trip: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/trips`, trip);
  }

  updateTrip(id: string, trip: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/trips/${id}`, trip);
  }

  deleteTrip(id: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/trips/${id}`);
  }
}