import { Component } from '@angular/core';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.css']
})
export class BlogMenuComponent {

  items:string[];

  constructor() { 
    this.items = environment.menu_items;
  }

}
