import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article

  constructor() { }

  voteUp(): boolean {
    this.article.voteUp();
    return false; // Do not propagate click to parents
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false; // Do not propagate click to parents
  }

  ngOnInit(): void {
  }

}
