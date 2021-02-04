import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from '../../services/course-service.service';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {
  panelOpenState = false;

  id: any;
  courses: any;
  university: any;

  constructor(
    private route: ActivatedRoute,
    private universityService: UniversitiesService,
    private courseService: CourseServiceService
    ) { }

  ngOnInit(): void {
    this.universityData();
    this.getCoursesData();
  }

  // tslint:disable-next-line: typedef
  getCoursesData(){
    this.courseService.getCourses(this.id).subscribe(data => {
      this.courses = data;
  });
}

// tslint:disable-next-line: typedef
universityData(){
  this.route.params.subscribe(params => {
    this.id = params.id;
    if (!this.id) {
      return;
    }
});
  this.universityService.EditUniversities(this.id).subscribe(resp => {
    console.log(resp);
    this.university = resp;
  });
}

// tslint:disable-next-line: typedef
deleteCourseData(courseId: string){
  this.courseService.deleteCourse(courseId).subscribe(resp => {
    this.getCoursesData();
  });
}


}
