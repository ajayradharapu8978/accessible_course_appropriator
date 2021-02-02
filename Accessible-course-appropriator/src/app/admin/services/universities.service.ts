import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { University } from '../models/university';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  universities: University[] | undefined;

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  getUniversities(pageSize: number, currentPage: number) {
    const queryParams = `?pageSize=${pageSize}&page=${currentPage}`;
    return this.httpClient.get(`${environment.api_url}/admin/showUniversitydata` + queryParams);
  }

  // tslint:disable-next-line: typedef
  postUniversity(university: University){
    return this.httpClient.post(`${environment.api_url}/admin/addUniversitydata`, university);
  }

  // tslint:disable-next-line: typedef
  EditUniversities(id: string) {
    return this.httpClient.get(`${environment.api_url}/admin/editUniversitydata/${id}`);
  }

  // tslint:disable-next-line: typedef
  putUniversities(id: string, university: University) {
    return this.httpClient.put(`${environment.api_url}/admin/updateUniversitydata/${id}`, university);
  }

  // tslint:disable-next-line: typedef
  deleteUniversities(id: string) {
    return this.httpClient.delete(`${environment.api_url}/admin/deleteUniversitydata/${id}`);
  }
}
