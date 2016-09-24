import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

@Component({
  templateUrl: 'app/auth/signup.component.html'
})

export class SignupComponent {

  constructor(private af: AngularFire, private router: Router) {  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/login']);
      })
    }
  }
}

@Component({
  templateUrl: 'app/auth/login.component.html'
})

export class LoginComponent {
  constructor(private af: AngularFire, private router: Router) { }
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/dashboard']);
      })
    }
  }
}
