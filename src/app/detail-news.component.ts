import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common'

import { News } from './news';
import { NewsService } from './news.service'

@Component({
  selector: 'detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css'],
  providers:[NewsService]
})

export class DetailNewsComponent implements OnInit{
  news : News;

  constructor(private newsService: NewsService,private route: ActivatedRoute,private location: Location) {}

  ngOnInit():void{
    this.route.params
      .switchMap((params: Params) => this.newsService.getDetailsOfNews(+params['id']))
      .subscribe(res => this.news = res);
  }

  goBack(): void {
    this.location.back();
  }

}
