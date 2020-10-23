import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(
    private validate: ValidateService,
    private flashMessage: FlashMessagesService,
    private auth: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onSubmit(): any {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
    };
    // Register Field
    if (!this.validate.validateRegister(user)) {
      this.flashMessage.show('Please fill all the Field', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
      // console.log(user);
      return false;
    }
    // Validate email
    if (!this.validate.validateEmail(user.email)) {
      this.flashMessage.show('invalid email', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
      return false;
    }

    // Register
    this.auth.registerUser(user).subscribe((data) => {
      // console.log(data);
      // tslint:disable-next-line:triple-equals
      if (data.success) {
        // the value data.success is from the server
        this.flashMessage.show('Successfully Register', {
          cssClass: 'alert-success',
          timeout: 3000,
        });
        this.route.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went Wrong', {
          cssClass: 'alert-danger',
          timeout: 3000,
        });
        this.route.navigate(['/register']);
      }
    });
  }
}
