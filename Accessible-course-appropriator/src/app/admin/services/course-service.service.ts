import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  courses: Course[] | undefined;

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  getCourses(id: string) {
    return this.httpClient.get(`${environment.api_url}/admin/showCourses/${id}`);
  }

  // tslint:disable-next-line: typedef
  deleteCourse(id: string) {
    return this.httpClient.delete(`${environment.api_url}/admin/deleteCoursesdata/${id}`);
  }
}
