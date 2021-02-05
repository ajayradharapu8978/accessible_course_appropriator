import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profile: User[] | undefined;

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  getProfileDetails(id: string){
    return this.httpClient.get(`${environment.api_url}/student/profile/${id}`);
  }

}
