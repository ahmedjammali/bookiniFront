import { Component } from '@angular/core';
import { Sub } from '../../models/sub';
import { UserService } from 'src/app/serviecs/user.service';
import { log } from '@grpc/grpc-js/build/src/logging';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  EmailError :boolean = false

  isSubscribed : boolean = false

  constructor (private auth : UserService){}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    console.log(formData);
    
    this.auth.addUser(formData).subscribe(
      response => {
        console.log(response);
        this.isSubscribed = true; // Show success message
      },
      error => {
        console.error('Error adding user:', error);
      }
    );
  }
}


