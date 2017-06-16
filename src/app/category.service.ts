import { Injectable } from '@angular/core';

import {Category} from './category';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise'
import  'rxjs/add/operator/map'

@Injectable()
export class CategoryService{
  private categoriesURl = 'http://testtask.sebbia.com/v1/news/categories';

  constructor(private http: Http){}

  getCat(): Promise<Category[]> {
    return this.http.get(this.categoriesURl)
      .toPromise()
      .then( response => response.json().list as Category[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //
    return Promise.reject(error.message || error);
  }
}
