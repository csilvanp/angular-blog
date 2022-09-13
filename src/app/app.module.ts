import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogTitleComponent } from './components/blog-title/blog-title.component';
import { BlogMainCardComponent } from './components/blog-main-card/blog-main-card.component';
import { BlogSubCardComponent } from './components/blog-sub-card/blog-sub-card.component';
import { BlogMenuComponent } from './components/blog-menu/blog-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogTitleComponent,
    BlogMainCardComponent,
    BlogSubCardComponent,
    BlogMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
