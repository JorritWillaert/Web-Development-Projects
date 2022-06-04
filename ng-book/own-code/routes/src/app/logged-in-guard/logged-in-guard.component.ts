import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logged-in-guard',
  templateUrl: './logged-in-guard.component.html',
  styleUrls: ['./logged-in-guard.component.css'],
})
export class LoggedInGuardComponent implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isLoggedIn = this.authService.isLoggedIn();
    console.log('canActivate', isLoggedIn);
    return isLoggedIn;
  }
}
