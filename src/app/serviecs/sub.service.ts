import { Injectable } from '@angular/core';
import { Firestore, collection,addDoc, query , where, collectionData , getDoc  } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(private afs :Firestore  ) { }

  addSubs(SubData){
    addDoc (collection (this.afs , 'subscribers') , SubData).then (() =>{
      console.log('subscriber Saved Successfully');
    })
  }

  checksubs ( subEmail ){
    return collectionData(query(collection(this.afs , 'subscribers'), where('email' , '==' , subEmail )))
  }



}
