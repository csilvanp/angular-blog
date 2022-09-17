import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-sub-card',
  templateUrl: './blog-sub-card.component.html',
  styleUrls: ['./blog-sub-card.component.css']
})
export class BlogSubCardComponent {

  @Input() imageSrc: string = "";
  @Input() createdAt: string = "";
  @Input() title: string = "";
  @Input() description: string = "";

  constructor() { }
}
