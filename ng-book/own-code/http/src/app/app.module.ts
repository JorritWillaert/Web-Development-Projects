import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { youTubeSearchInjectables } from './youtube-search/youtube-search.injectables';
import { SearchBoxComponent } from './youtube-search/search-box/search-box.component';
import { SearchResultComponent } from './youtube-search/search-result/search-result.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search/youtube-search.component';

@NgModule({
  declarations: [AppComponent, SimpleHttpComponent, SearchBoxComponent, SearchResultComponent, YoutubeSearchComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent],
})
export class AppModule {}
