import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodPickupReportDTO } from '../food-pickup-report/food-pickup-report.component';

@Injectable({
  providedIn: 'root'
})
export class FoodPickupService {

  private apiUrl = 'http://localhost:8080/foodpickups';

  constructor(private http: HttpClient) {}

  registerPickup(clientId: string, place: string) {
  return this.http.post(
    `http://localhost:8080/foodpickups/register/${clientId}?place=${encodeURIComponent(place)}`,
    {},
    { responseType: 'text' }
  );
}


  getClientPickups(clientId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/client/${clientId}`);
  }

  getPickupsByMonthYear(year: number, month: number, place: string) {
  return this.http.get<FoodPickupReportDTO[]>(`http://localhost:8080/foodpickups/filter?year=${year}&month=${month}&place=${encodeURIComponent(place)}`);
}


}
