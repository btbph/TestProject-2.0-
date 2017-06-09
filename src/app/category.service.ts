import { Injectable } from '@angular/core';

import {Category} from './category';
import {CATEGORIES} from './mock-categories'


@Injectable()
export class CategoryService{
  getCat(): Category[] {
    return CATEGORIES;
  }
}
