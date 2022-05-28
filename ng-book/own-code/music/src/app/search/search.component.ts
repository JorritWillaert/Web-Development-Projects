import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyServiceService } from '../services/spotify-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object | null;

  constructor(
    private spotify: SpotifyServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'] || '';
    });
  }

  ngOnInit(): void {}

  search() : void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.spotify.searchTrack(this.query).subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }
}
