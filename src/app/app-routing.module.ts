import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {CategoriesComponent} from './category.component'
import {ListNewsComponent} from './list-news.component'
import {DetailNewsComponent} from './detail-news.component'

const routes:Routes = [
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home', component: CategoriesComponent},
  {path:'category/:id', component: ListNewsComponent},
  {path:'detail/:id', component: DetailNewsComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
