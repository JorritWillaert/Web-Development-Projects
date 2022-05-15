import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp(): boolean {
    this.votes += 1;
    return false; // Do not propagate click to parents
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false; // Do not propagate click to parents
  }

  ngOnInit(): void {
  }

}
