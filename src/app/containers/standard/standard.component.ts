import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StandardComponent {
  user = false;
  admin = false;
  signUp = false;
  logo = true;
  buttons = [
    { arg: 'user', text: 'Login'},
    { arg: 'admin', text: 'Admin Login'},
    { arg: 'signUp', text: 'Sign Up'}
  ];

  showForm(name) {
    this.logo = false;
    if(name === 'user') {
      this.user = true;
      this.admin = false;
      this.signUp = false;
    } else if(name === 'admin') {
      this.user = false;
      this.admin = true;
      this.signUp = false; 
    } else if (name === 'signUp') {
      this.user = false;
      this.admin = false;
      this.signUp = true;
    }
  }

  userLogin(event) {
    console.log(event);
  }

  adminLogin(event) {
    console.log(event);
  }

  userSignUp(event) {
    console.log(event);
  }
}
