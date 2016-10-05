import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseApp } from 'angularfire2';

@Component({
  templateUrl: 'app/auth/signup.component.html'
})

export class SignupComponent {
  public error: any;

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
    } else {
      this.error = 'Your form is invalid';
    }
  }
}

@Component({
  templateUrl: 'app/auth/login.component.html'
})

export class LoginComponent {
  public error: any;

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
    } else {
      this.error = 'Your form is invalid';
    }
  }
}

@Component({
  templateUrl: 'app/auth/resetpassword.component.html'
})

export class ResetpassComponent {
  public auth: any;
  public message: any;
  constructor(private af: AngularFire, @Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth()
    console.log(this.auth);
  }

  onSubmit(formData) {
     if(formData.valid) {
       console.log('Submission worked');
       this.auth.sendPasswordResetEmail(formData.value.email)
         .then( (response) => {
           console.log('Sent successfully');
           this.message = 'Check your email for reset link';
         })
         .catch( (error) => {
           this.message = error;
           console.log(error);
         })
     }
  }
}