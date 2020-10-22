import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  // tslint:disable-next-line:typedef
  validateRegister(user) {
    // tslint:disable-next-line:triple-equals
    if (user.name == undefined || user.username == undefined || user.email == undefined || user.password){
      return false;
    } else  {
      return  true;
    }
  }

  // tslint:disable-next-line:typedef
  validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
}
