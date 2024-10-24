import { Injectable } from '@angular/core';
import { Firestore , addDoc,collection ,collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private  afs :Firestore ) { }


  addSubs(SubData){
    addDoc (collection (this.afs , 'contact') , SubData).then (() =>{
      console.log('Saved Successfully');
    })
  }

}
