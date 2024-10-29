import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/serviecs/categories.service';


@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  
  categories  : any


  constructor (private categ : CategoriesService , private cdr :ChangeDetectorRef){}

  

  ngOnInit(): void {
    
    this.categ.loadData().subscribe(
      data => {

          this.categories = data; // Assign the fetched data to the categories property
          console.log(this.categories); // Log the categories data
          this.cdr.detectChanges()
        
        
      },
      error => {
        console.error('Error fetching categories:', error); // Handle errors
      }
    );
      console.log(this.categories)
      console.log ("azeaz")
  }

}
