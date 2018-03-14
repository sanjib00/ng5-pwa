/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    console.log(this.model.email);
    console.log(this.model.password);
    this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(result => {
          if (result === true) {
            // login successful
            this.router.navigate(['/']);
          } else {
            // login failed
            this.error = 'Email or password is incorrect';
            this.loading = false;
          }
        });
  }
}