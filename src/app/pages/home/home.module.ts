import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BlogTitleComponent } from '../../components/blog-title/blog-title.component';
import { BlogMainCardComponent } from '../../components/blog-main-card/blog-main-card.component';
import { BlogSubCardComponent } from '../../components/blog-sub-card/blog-sub-card.component';
import { BlogMenuComponent } from '../../components/blog-menu/blog-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    BlogTitleComponent,
    BlogMainCardComponent,
    BlogSubCardComponent,
    BlogMenuComponent,
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
