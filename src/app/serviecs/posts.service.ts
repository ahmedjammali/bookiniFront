import { Injectable } from '@angular/core';
import { Firestore ,collection,collectionData ,query, where  ,  limit   ,orderBy , updateDoc ,doc ,addDoc } from '@angular/fire/firestore';
 

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs : Firestore ) { }


  loadFeatured(){
    return collectionData(query (collection(this.afs, 'posts'), where("isFeatured" , "==" , true),  limit(4)), { idField: 'id'});
  }

  loadLastest (){
    return collectionData(query (collection(this.afs, 'posts'), orderBy("createAt", "desc"),  limit(8)), { idField: 'id'});
  }

  loadCategoryPosts(categoryId){
    return collectionData(query (collection(this.afs, 'posts'), where("category.categoryId" , "==" , categoryId),  limit(4)), { idField: 'id'});
  }

  loadOnePost (postId) {
    return collectionData(query (collection(this.afs, 'posts'), where("permalink" , "==" , postId)), { idField: 'id'});
  }


  loadSimilar (categoryId){
    return collectionData(query (collection(this.afs, 'posts'), where("category.categoryId" , "==" , categoryId),  limit(4)), { idField: 'id'});
  }

  countViews (postId , postId2){
    var view : Number
    
    const data =   collectionData(query (collection(this.afs, 'posts'), where("permalink" , "==" , postId)), { idField: 'id'});
    data.subscribe(val =>{
      view = val[0]['views'] +1  ;
    })
    
    
    setTimeout(() => {
      console.log(view);
      const docInstance =  doc(this.afs , 'posts' , postId2 )
      updateDoc(docInstance  , {views : view})
    }, 1000)

  }

  addComment (commentData){
    addDoc (collection (this.afs , 'comments') , commentData).then (() =>{
      console.log('Comment Saved Successfully');
    })
  }

  getPostComments (postId){
    return collectionData(query (collection(this.afs, 'comments'),where("postId" , "==" , postId)), { idField: 'id'});
  }


}
