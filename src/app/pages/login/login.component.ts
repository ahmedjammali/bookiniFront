import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serviecs/authentification.service';

import { UserService } from 'src/app/serviecs/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  EmailError : boolean = false
  isLogged : boolean = false
  found : boolean = true 
  PasswordError : boolean = false
  constructor (private auth: UserService , private route : Router , private auth2 : AuthService){}

  ngOnInit(): void {}
  
  onSubmit(formVal){
    this.EmailError  = false
    this.isLogged = false
  this.found  = true 
  this.PasswordError  = false
    this.EmailError = false
    const subData ={
      email : formVal.email , 
      mdp : formVal.mdp,
    }
    this.auth.login(subData).subscribe(
      response => {
        console.log(response);
        this.isLogged = true; 
        this.auth2.login(response.user)
        this.route.navigate(['/']) 
      },
      error => {
        console.error('Credentials Error:', error);
        if (error.error.message =='User not found'){
          this.found = false
        }
        if (error.error.message == 'Invalid password'){
          this.PasswordError = true
        }
        
      }
    );
    }}
