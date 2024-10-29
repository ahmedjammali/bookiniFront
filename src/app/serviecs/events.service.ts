
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environnement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http  : HttpClient) { }

  private apiUrl = environment.apiUrl;

  loadEvent():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/events`)
  }
  
  getEventById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/${id}`);
  }


}
