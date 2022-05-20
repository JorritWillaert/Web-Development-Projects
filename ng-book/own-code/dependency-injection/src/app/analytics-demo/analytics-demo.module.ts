import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Metric, AnalyticsImplementation } from './analytics-demo.interface';
import { AnalyticsService } from '../services/analytics.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: 'API_URL', useValue: 'http://devserver.com' },
    // `AnalyticsService` is the _token_ we use to inject
    // note, the token is the class, but it's just used as an identifier!
    {
      provide: AnalyticsService,

      deps: [HttpClient, "API_URL"],

      // useFactory is a function - whatever is returned from this function
      // will be injected
      useFactory(http: HttpClient, apiUrl: string) {
        // create an implementation that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
            console.log("Sending to: ", apiUrl);
            // ... You'd send the metric using http here ...
          },
        };
        // create our new `AnalyticsService` with the implementation
        return new AnalyticsService(loggingImplementation);
      },
    },
  ],
  declarations: [],
})
export class AnalyticsDemoModule {}
