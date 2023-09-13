import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  login(credentials: any) {
    this.isUserLoggedIn =
      credentials.username === 'test' && credentials.password === 'test';
    localStorage.setItem(
      'isUserLoggedIn',
      this.isUserLoggedIn ? 'true' : 'false'
    );
    return this.isUserLoggedIn;
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor() {}
}
