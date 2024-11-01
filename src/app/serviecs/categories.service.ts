import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environnement';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http : HttpClient) { }
  private apiUrl = environment.apiUrl;


  loadData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }

  
}
