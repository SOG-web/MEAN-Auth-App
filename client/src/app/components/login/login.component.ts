import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private flash: FlashMessagesService
  ) {}

  ngOnInit(): void {}
  onSubmit(): any {
    const user = {
      username: this.username,
      password: this.password,
    };
    this.auth.loginUser(user).subscribe((data) => {
      // console.log(data);
      if (data.success) {
        this.auth.storeUserData(data.token, data.user);
        this.flash.show('you are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000,
        });
        this.router.navigate(['profile']);
      } else {
        this.flash.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
      }
    });
  }
}
