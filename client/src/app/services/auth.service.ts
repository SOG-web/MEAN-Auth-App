import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  registerUser(user): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('users/register', user, { headers }).pipe(
      map((res) => {
        //  console.log(res);
        return res;
      })
    );
  }

  loginUser(user): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('users/authenticate', user, { headers }).pipe(
      map((res) => {
        // console.log(res);
        return res;
      })
    );
  }

  getProfile(): any {
    this.loadToken();
    const options = {
      headers: new HttpHeaders({ Authorization: `${this.authToken}` }),
    };
    // console.log(this.authToken);
    // console.log(options);
    return this.http.get('users/profile', options).pipe(
      map((res) => {
        //  console.log(res);
        return res;
      })
    );
  }

  // tslint:disable-next-line:typedef
  loadToken() {
    this.authToken = localStorage.getItem('id_token');
    // console.log(this.authToken);
  }

  storeUserData(token, user): any {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): any {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
