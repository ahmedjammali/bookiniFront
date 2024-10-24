import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/serviecs/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  saved : boolean = false

  constructor(private contact : ContactService){}

  ngOnInit(): void {
      
  }

  onSubmit (contactValue){
    const  contact: Contact =  {
      name : contactValue.name ,
      email  : contactValue.email, 
      message  :contactValue.message, 
      sendAt : new Date ()
    }
    console.log(contact);
    
    this.saved = true
    this.contact.addSubs(contact)
  }

  
}
