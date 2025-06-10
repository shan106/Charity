import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodPickupService {

  private apiUrl = 'http://localhost:8080/foodpickups';

  constructor(private http: HttpClient) {}

  registerPickup(clientId: string, place: string): Observable<any> {
    
    return this.http.post(`${this.apiUrl}/register/${clientId}?place=${encodeURIComponent(place)}`, {});
  }

  getClientPickups(clientId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/client/${clientId}`);
  }
}
