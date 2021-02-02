import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private jwtService: JwtService,
    private router: Router
    ) { }

  canActivate(): boolean {
    if (this.jwtService.getToken()) {
      return true;
    }
    else {
      this.router.navigate(['/userLogin']);
      return false;
    }
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}
