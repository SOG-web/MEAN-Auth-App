import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  token: any;
  display: boolean;
  constructor() {}

  // tslint:disable-next-line:typedef
  loadToken() {
    this.token = localStorage.getItem('id_token');
    // console.log(this.authToken);
  }

  // tslint:disable-next-line:typedef
  authenticateDisplay() {
    this.loadToken();
    return !!this.token;
  }

  // tslint:disable-next-line:typedef
  displayFunc() {
    if (this.authenticateDisplay() === true) {
      return (this.display = true);
    } else {
      return (this.display = false);
    }
  }
}
