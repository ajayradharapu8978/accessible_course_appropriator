import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  users: User[] | undefined;

  // tslint:disable-next-line: typedef
  getUsers(pageSize: number, currentPage: number) {
    const queryParams = `?pageSize=${pageSize}&page=${currentPage}`;
    return this.httpClient.get(`${environment.api_url}/admin/showStudentdata` + queryParams);
  }
}
