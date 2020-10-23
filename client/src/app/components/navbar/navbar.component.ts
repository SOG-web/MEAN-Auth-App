import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private flash: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogoutClick(): any {
    this.auth.logout();
    this.flash.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000,
    });
    this.router.navigate(['login']);
    return false;
  }
}
