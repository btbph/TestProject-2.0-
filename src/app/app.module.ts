import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ListNewsComponent } from './list-news.component';
import { CategoryService } from './category.service';
import { CategoriesComponent } from './category.component';
import { DetailNewsComponent} from './detail-news.component'

import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ListNewsComponent,
    CategoriesComponent,
    DetailNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
