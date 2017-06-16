import { Injectable } from '@angular/core'
import { Http } from  '@angular/http'

import { News } from './news'


@Injectable()
export class NewsService{

  constructor(private http:Http) {}


  getListOfNews(page:number,id:number ) :Promise<News[]>
  {
    const url = `http://testtask.sebbia.com/v1/news/categories/${id}/news?page=${page}`;
    return this.http.get(url).toPromise().then(response => response.json().list as News[])
      .catch(this.handleError)

  }


  getCountOfNews(page:number,id:number) :Promise<number>
  {
    const url = `http://testtask.sebbia.com/v1/news/categories/${id}/news?page=${page}`;
    return this.http.get(url).toPromise().then(response => response.json().list.length as News[])
      .catch(this.handleError)
  }

  getDetailsOfNews(id:number):Promise<News>
  {
    const url = `http://testtask.sebbia.com/v1/news/details?id=${id}`;
    return this.http.get(url).toPromise().then(response => response.json().news as News)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //
    return Promise.reject(error.message || error);
  }

}
