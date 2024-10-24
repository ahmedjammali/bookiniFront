import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/serviecs/posts.service';

import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent  implements OnInit{


  OnePost : Observable<any>

  postId : string

  commentT : boolean = false


  SimilarPost : Observable<any>

  idPost : string

  commentsArray :Observable <any>

  length : any ;

  constructor ( private route : ActivatedRoute , private posts : PostsService ){}

  ngOnInit(): void {

      this.route.params.subscribe (val =>{      
        this.idPost=val['id2']
        console.log(val['id']);
        
        this.posts.countViews(val['id'],val['id2'])  
        this.OnePost= this.posts.loadOnePost(val['id'])

        this.OnePost.subscribe (val1 =>{
          
          this.loadSimilarPost(val['category']) 
        })
        this.commentsArray = this.posts.getPostComments(this.idPost)

        
    })

    this.commentsArray.subscribe(val => {
      this.length = val.length
    } )
    
    
  }



  loadSimilarPost (cateId){
    this.SimilarPost = this.posts.loadSimilar(cateId)

    this.SimilarPost.subscribe(val =>{
   
    })
  }

  onSubmit(formValues){
    this.commentT = true
    const values : Comment = {
      name: formValues.name, 
      comment: formValues.comment,
      postId : this.idPost,
      createAt : new Date ()
    } 
    this.posts.addComment(values)

  }

}
