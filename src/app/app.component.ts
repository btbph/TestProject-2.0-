import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService]
})

export class AppComponent {
  categories : Category[];
  selectedCategory: Category;

  constructor(private catService: CategoryService) { }

  onSelect(cat: Category):void{
    this.selectedCategory = cat;
  }

  getCategories(): void{
    this.categories=this.catService.getCat();
  }

  ngOnInit():void{
    this.getCategories();
  }


}

