import { Component, Input } from '@angular/core';

import {News} from './news'
import {Category} from './category'

const NEWS: News[] = [
  {date: "2017",id: 0,title:"News1"},
  {date: "2018",id: 1,title:"News2"},
  {date: "2019",id: 2,title:"News3"},
];

@Component({
  selector:'list-news',
  templateUrl:'./list-news.component.html',
})

export class ListNewsComponent{
  @Input() category:Category; //нужен только id
}
