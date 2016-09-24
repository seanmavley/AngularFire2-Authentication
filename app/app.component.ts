import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router';

@Component({
  selector: 'root-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent { 
  constructor(private af: AngularFire, private router: Router) {
    // this.af.auth.subscribe(auth => console.log(auth));
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/'])
  }
}


@Component({
  templateUrl: 'app/page.not.found.html'
})

export class PageNotFoundComponent {}