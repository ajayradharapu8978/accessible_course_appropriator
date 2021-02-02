import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { University } from '../models/university';
import { UniversitiesService } from '../services/universities.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss'],
  providers: [UniversitiesService]
})
export class UniversitiesComponent implements OnInit {

  dataSource: any;
  pageLength = 0;
  pageSize = 10;
  currentPage = 1;

  displayedColumns: string[] = ['universityName', 'country', 'email', 'phone', 'Website', 'address', '_id'];

  constructor(
    private universityService: UniversitiesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.univarsitiesData();
  }


  // tslint:disable-next-line: typedef
  newBtnHanlder() {
    this.router.navigate(['admin', 'universities', 'new']);
  }

  infoBtnHandler(id: string, name: string) {
    this.router.navigate(['admin', 'universities', 'info', id, name]);
  }

  // tslint:disable-next-line: typedef
  editBtnHandler(id: string) {
    this.router.navigate(['admin', 'universities', id]);
  }

  // tslint:disable-next-line: typedef
  DeleteHandler(id: string){
    this.universityService.deleteUniversities(id).subscribe(resp => {
      this.univarsitiesData();
    });
  }

  // tslint:disable-next-line: typedef
  univarsitiesData(){
    this.universityService.getUniversities(this.pageSize, this.currentPage).subscribe(data => {
        this.universityService.universities = data as University[];
        this.dataSource = this.universityService.universities;
        this.pageLength = this.dataSource.maxUniversities;
        this.dataSource = this.dataSource.Universities;
    });
  }



  // tslint:disable-next-line: typedef
  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    this.universityService.getUniversities(this.pageSize, this.currentPage).subscribe(data => {
      this.universityService.universities = data as University[];
      this.dataSource = this.universityService.universities;
      this.pageLength = this.dataSource.maxUniversities;
      this.dataSource = this.dataSource.Universities;
    });
  }
}
