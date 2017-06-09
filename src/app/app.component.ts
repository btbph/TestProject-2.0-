import { Component } from '@angular/core';
import { Category } from './category'




const CATEGORIES: Category[] = [
  {id: 0, name: 'War News'},
  {id: 1, name: 'Sport News'},
  {id: 2, name: 'Life News'}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  categories = CATEGORIES;
  selectedCategory: Category;
}

