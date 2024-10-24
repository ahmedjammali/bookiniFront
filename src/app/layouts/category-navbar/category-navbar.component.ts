import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/serviecs/categories.service';
import { SubService } from 'src/app/serviecs/sub.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  
  categories  : Observable<any>


  constructor (private categoS : CategoriesService , private subs :SubService){}

  

  ngOnInit(): void {
      this.categories = this.categoS.loadData()
  }

}
