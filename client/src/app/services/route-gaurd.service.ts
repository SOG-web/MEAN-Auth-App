import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(private router: Router, private authGuard: AuthGuardService) {}
  // tslint:disable-next-line:typedef
  canActivate(): any {
    if (this.authGuard.authenticateDisplay()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
