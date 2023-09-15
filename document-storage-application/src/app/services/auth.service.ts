import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  login(credentials: any) {
    this.isUserLoggedIn =
      credentials.username === 'testuser' &&
      credentials.password === 'testpassword';
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
