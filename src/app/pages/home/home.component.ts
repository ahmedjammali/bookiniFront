
import { Component, OnInit } from '@angular/core';
import { log } from '@grpc/grpc-js/build/src/logging';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/serviecs/events.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  postArray : any
  latestsPost : any

  constructor (private eventS : EventsService){}

  ngOnInit(): void {
    this.eventS.loadEvent().subscribe(
      data =>{
        
        this.latestsPost = data 
      } , 
      error => {
        console.error('Error fetching categories:', error); // Handle errors
      }
    )

      
  }
  

}
