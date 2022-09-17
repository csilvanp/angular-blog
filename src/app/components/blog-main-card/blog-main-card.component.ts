import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-main-card',
  templateUrl: './blog-main-card.component.html',
  styleUrls: ['./blog-main-card.component.css']
})
export class BlogMainCardComponent {

  imageSrc: string;
  createdAt: string;
  title: string;
  description: string;

  constructor() {
    this.imageSrc = environment.mainCard.imgSrc;
    this.createdAt = environment.mainCard.createdAt;
    this.title = environment.mainCard.title;
    this.description = environment.mainCard.description;
  }

}
