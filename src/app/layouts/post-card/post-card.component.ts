import { Component, OnInit ,Input} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  
  constructor (){}

  @Input()  postData: Array<any>
  array : Array<object>

  ngOnInit(): void {
  }



}
