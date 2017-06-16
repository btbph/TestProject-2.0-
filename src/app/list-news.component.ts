import { Component, OnInit} from '@angular/core';
import { Params, ActivatedRoute, Router} from '@angular/router'

import {News} from './news';
import { NewsService } from './news.service'
import {PagerService} from './pager.service'

import 'rxjs/add/operator/switchMap'



@Component({
  selector:'list-news',
  templateUrl:'./list-news.component.html',
  providers: [NewsService, PagerService],
  styleUrls:['./list-news.component.less']
})

export class ListNewsComponent implements OnInit{

  mockOfNews: News[];
  amountOfPages:number;
  amountOfNews: number;
  page:number;
  pages: number[];
  listIsEmpry:boolean;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router,
              private pagerService: PagerService){
    this.amountOfPages = 0;
  }

  getListNewsOnPage()
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
    this.page=1;
    this.pages=this.pagerService.getListOfPages(1);

  }


  goHome():void{
    this.router.navigate(['/home']);
  }

  setPage(num:number):void{
    this.pages = this.pagerService.getListOfPages(num,this.pages[0]);
    this.route.params
      .switchMap((params: Params) => this.newsService.getCountOfNews(num,+params['id']))
      .subscribe(res => this.amountOfNews = res);
    if(this.amountOfNews == 0)
      return;

  }



}
