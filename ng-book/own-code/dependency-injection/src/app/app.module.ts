import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserDemoModule } from './user-demo/user-demo.module';

@NgModule({
  declarations: [AppComponent, UserDemoComponent],
  imports: [BrowserModule, UserDemoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
