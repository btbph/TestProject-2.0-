import { Component, OnInit} from '@angular/core';
import { Params, ActivatedRoute} from '@angular/router'

import {News} from './news';
import { NewsService } from './news.service'

import 'rxjs/add/operator/switchMap'


@Component({
  selector:'list-news',
  templateUrl:'./list-news.component.html',
  providers: [NewsService],
  styleUrls:['./list-news.component.css']
})

export class ListNewsComponent implements OnInit{

  mockOfNews: News[];
  amountOfPages:number;
  amountOfNews: number;
  listIsEmpry:boolean;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute){ this.amountOfPages = 0}

  getListNewsOnPage() //возможно стоит отрефакторить
  {
    ++this.amountOfPages;
    this.route.params
      .switchMap((params: Params) => this.newsService.getListOfNews(this.amountOfPages,+params['id']))
      .subscribe(res => {for(let to of res){ this.mockOfNews.push(to)}});
    this.route.params
      .switchMap((params: Params) => this.newsService.getCountOfNews(this.amountOfPages,+params['id']))
      .subscribe(res => this.amountOfNews = res);

  }

  checkListIsEmpty():void{
    this.listIsEmpry = (this.amountOfNews == 0);
  }

  ngOnInit():void{
    this.route.params
      .switchMap((params: Params) => this.newsService.getListOfNews(this.amountOfPages,+params['id']))
      .subscribe(res => this.mockOfNews = res);
    this.route.params
      .switchMap((params: Params) => this.newsService.getCountOfNews(this.amountOfPages,+params['id']))
      .subscribe(res => this.amountOfNews = res);

  }


}
