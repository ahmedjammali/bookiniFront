import { Injectable } from '@angular/core';
import { Firestore , collection, collectionData} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fire : Firestore) { }
  apiUri = ""


  loadData(){

    return collectionData(collection(this.fire, 'categories'), { idField: 'id'});
  }

  
}
