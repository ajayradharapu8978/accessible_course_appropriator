import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('id')) {
      return true;
    }
    else {
      this.router.navigate(['/adminLogin']);
      return false;
    }
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}

