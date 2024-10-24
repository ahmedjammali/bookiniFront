import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/serviecs/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  postArray: Observable<any>  

  categoryObj : any; 

  constructor(private route:ActivatedRoute , private postS : PostsService){}


  ngOnInit(): void {
      this.route.params.subscribe (val =>{

        this.categoryObj  = val 
        this.postArray = this.postS.loadCategoryPosts(val['id'])
       })
  }
}
