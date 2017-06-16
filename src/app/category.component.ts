import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service'

@Component({
  selector: 'my-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./category.component.less']
})

export class CategoriesComponent implements OnInit{
  categories : Category[];

  constructor(private catService: CategoryService) { }


  getCategories(): void{
    this.catService.getCat().then(categories => this.categories = categories);
  }

  ngOnInit():void{
    this.getCategories();
  }


}

