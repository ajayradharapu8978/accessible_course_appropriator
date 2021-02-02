import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  // tslint:disable-next-line: typedef
  setToken(token: string) {
    window.localStorage.setItem('jwt_token', token);
  }
  // tslint:disable-next-line: typedef
  getToken() {
    return window.localStorage.getItem('jwt_token');
  }
  // tslint:disable-next-line: typedef
  destroyToken() {
    window.localStorage.removeItem('jwt_token');
  }
}
