import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(private validate: ValidateService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(formValues) {
const user = {
  name: formValues.name,
  username: formValues.username,
  email: formValues.email,
  password: formValues.password
};
// Register Field
if (!this.validate.validateRegister(user)) {
      console.log('not register');
    }
  }

}
