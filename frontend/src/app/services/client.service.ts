import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface Client {
  id?: string;
  name: string;
  birth: string;
  adres: string;
  tel: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  @Injectable({
  providedIn: 'root'
})

  private apiUrl = 'http://localhost:8080/clients'; // Pas aan naar jouw backend endpoint

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client); 
  }

  findClient(query: string) {
  
  return this.http.get<any>(`http://localhost:8080/clients/search?query=${encodeURIComponent(query)}`);
}


}


