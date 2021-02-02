import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuardService implements CanActivate{

  constructor() { }

  // tslint:disable-next-line: typedef
  canActivate() {
    return true;
  }

}

