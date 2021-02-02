import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserloginResp } from 'src/app/home/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  signup(user: string){
    return this.httpClient.post(`${environment.api_url}/student/addstudentdata`, user);
  }

  // tslint:disable-next-line: typedef
  login(user: string) {
    return this.httpClient.post<UserloginResp>(`${environment.api_url}/student/studentlogin`, user);
  }
}
