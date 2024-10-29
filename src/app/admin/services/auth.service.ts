import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword , createUserWithEmailAndPassword, authState, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggeIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false)

  isLoggedGuard : boolean = false

  constructor(private auth: Auth,private toastr : ToastrService, private router : Router) { }

  login (email , password){
    
      this.router.navigate(['/'])
    
  }

  Register(email : string, password : string) {
    createUserWithEmailAndPassword(this.auth, email, password)
    .then((result) => {
     
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }

  loadUser(){
     
  }

  logOut(){
    signOut (this.auth).then (() => {
      this.toastr.info ('user Logged Out Successfully')
      localStorage.removeItem ('user')
      this.loggeIn.next(false)
      this.isLoggedGuard = false
    })
    
  }

  isLogged (){
    
  }

}
