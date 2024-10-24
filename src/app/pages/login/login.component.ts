import { Component } from '@angular/core';
import { Sub } from '../../models/sub';
import { SubService } from '../../serviecs/sub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  EmailError :boolean = false

  isSubscribed : boolean = false

  constructor (private subs :SubService){}

  ngOnInit(): void {}
  
  onSubmit(formVal){
    this.EmailError = false
    const subData : Sub={
      name : formVal.name,
      email : formVal.email
    }
    this.subs.checksubs(subData.email).subscribe(val =>{
      if (val.length == 0){
        this.isSubscribed= true
        this.subs.addSubs(subData)
      }
  

      
})}}
