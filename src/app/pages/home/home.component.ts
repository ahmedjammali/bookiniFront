
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/serviecs/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  postArray : Observable<any>

  latestsPost  : Observable<any>

  constructor (private postS : PostsService){}

  ngOnInit(): void {
      this.postArray =  this.postS.loadFeatured()
      this.latestsPost = this.postS.loadLastest()
  }
  

}
