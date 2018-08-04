import { Component, OnInit } from '@angular/core';
import { CategoryService } from './shared/services/category.service';
import { Category } from './shared/services/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-assessment';
  categories: Category[]

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }

}
