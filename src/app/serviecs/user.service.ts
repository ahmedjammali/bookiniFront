import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface LoginCredentials {
  email: string;
  mdp: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient  ) { }


  addUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}users`, user);
  }

  // New login method
  login(credentials: LoginCredentials): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login`, credentials);
  }
}
