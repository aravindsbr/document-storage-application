import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): any {
    let val: any = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == 'true') {
      if (url == '/login') this.router.parseUrl('/dashboard');
      else return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
