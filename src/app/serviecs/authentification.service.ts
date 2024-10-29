import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  currentLoginStatus = this.loggedIn.asObservable();

  private userCredentials: any;

  private hasToken(): boolean {
    return Boolean(localStorage.getItem('islogged'));
  }

  login(credentials: any) {
    localStorage.setItem('islogged', 'true');
    localStorage.setItem('userCrentials', JSON.stringify(credentials));
    this.loggedIn.next(true);
    this.userCredentials = credentials; // Store user data
  }

  logout() {
    localStorage.removeItem('islogged');
    localStorage.removeItem('userCrentials');
    this.loggedIn.next(false);
    this.userCredentials = null; // Clear user data
  }

  getUserCredentials() {
    return JSON.parse(localStorage.getItem('userCrentials') || '{}');
  }
}
