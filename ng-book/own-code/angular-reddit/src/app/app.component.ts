import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Vue', 'http://vue.com', 2),
      new Article('React', 'http://react.com', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    return false;
  }
}
