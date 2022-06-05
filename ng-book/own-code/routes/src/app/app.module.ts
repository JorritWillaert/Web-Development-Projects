import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuardComponent } from './logged-in-guard/logged-in-guard.component';

import { AUTH_PROVIDERS } from './services/auth.service'; 
import {
  routes as childRoutes,
  ProductsModule
} from './products/products.module';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },

  // authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuardComponent],
  },

  // nested
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes,
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, LoginComponent, ProtectedComponent, LoggedInGuardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ProductsModule,
  ],
  providers: [
    // uncomment this for "hash-bang" routing
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AUTH_PROVIDERS,
    LoggedInGuardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
