import { Component , OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubService } from '../serviecs/sub.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit{

  EmailError :boolean = false

  isSubscribed : boolean = false

  constructor (private subs :SubService){}

  ngOnInit(): void {
      
  }

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
      
    })
      
  

  }
  
}
