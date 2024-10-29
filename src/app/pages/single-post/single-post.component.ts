import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


import { Comment } from 'src/app/models/comment';
import { BookingService } from 'src/app/serviecs/booking.service';
import { EventsService } from 'src/app/serviecs/events.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent  implements OnInit{


  OneEvent : any

  postId : string

  commentT : boolean = false


  SimilarPost : Observable<any>

  idPost : string

  commentsArray :Observable <any>

  length : any ;
  logged : boolean =true 
  booked : boolean = false

  categoryId: string | null = null;
  eventId: string | null = null;
  constructor ( private route : ActivatedRoute ,private eventS : EventsService  , private bookingS : BookingService){}

  ngOnInit(): void {

     if (localStorage.getItem('islogged') == "true"){
      this.logged = false
     }





      
    this.categoryId = this.route.snapshot.paramMap.get('category');
    this.eventId = this.route.snapshot.paramMap.get('id2');

    console.log('Category ID:', this.categoryId);
    console.log('Event ID:', this.eventId);
    this.eventS.getEventById(this.eventId).subscribe(data =>{
      this.OneEvent = data
      console.log(this.OneEvent);
      
      
    }
    )



    
  }



  loadSimilarPost (cateId){
   
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {
        prenom: form.value.prenom,
        nom: form.value.nom,
        email: form.value.email,
        phoneN: form.value.phone,
        event_id : this.eventId
      };
      console.log(formData);
      this.bookingS.createBooking(formData).subscribe(
        res =>{
          console.log(res)
          this.booked = true

        }
      )
      error => {
        console.error('Error fetching categories:', error); // Handle errors
      }

      
    }
  }

}
