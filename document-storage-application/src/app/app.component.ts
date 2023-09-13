import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Document Storage Application';
  isUserLoggedIn = false;
  loginButtonLabel = 'Login';

  constructor() {}

  ngOnInit() {
    let storeData = localStorage.getItem('isUserLoggedIn');

    if (storeData != null && storeData == 'true') {
      this.isUserLoggedIn = true;
    } else this.isUserLoggedIn = false;
  }
}
