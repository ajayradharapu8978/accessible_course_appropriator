import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UniversitiesService } from '../services/universities.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-university-form',
  templateUrl: './university-form.component.html',
  styleUrls: ['./university-form.component.scss'],
  providers: [UniversitiesService]
})
export class UniversityFormComponent implements OnInit {

  regForm: any;
  id: any;
  details: any;

  constructor(
    private formBuilder: FormBuilder,
    private universityService: UniversitiesService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void{
    this.regForm = this.formBuilder;
    this.initForm();
    this.SetUniversityToForm();
  }

  // tslint:disable-next-line: typedef
  initForm(){
    this.regForm = this.formBuilder.group({
      universityName: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      Website: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  onSubmit(){

    if (this.regForm.invalid) {
      return;
    }
    if (this.id) {
    this.universityService.putUniversities(this.id, this.regForm.value).subscribe(data => {
      if (data) {
       this.snackBar.open('University Updated!', 'Success', {
         duration: 2000
       });
       this.regForm.reset();
       this.router.navigate(['admin', 'universities']);
      }
     },
     err => this.errorHandler(err, 'Oops something went Wrong!'));
    } else {
      this.universityService.postUniversity(this.regForm.value).subscribe(data => {
       if (data) {
        this.snackBar.open('University created!', 'Success', {
          duration: 2000
        });
        this.regForm.reset();
        this.router.navigate(['admin', 'universities']);
       }
      },
      err => this.errorHandler(err, 'Oops something went Wrong!'));
    }
  }

  // tslint:disable-next-line: typedef
  SetUniversityToForm(){
    this.route.params.subscribe(params => {
      this.id = params.id;
      if (!this.id) {
        return;
      }
      this.universityService.EditUniversities(this.id).subscribe(data => {
        this.details = data;
        this.regForm = this.formBuilder.group({
          universityName: [this.details.universityName, Validators.required],
          country: [this.details.country, Validators.required],
          email: [this.details.email, Validators.required],
          phone: [this.details.phone, Validators.required],
          address: [this.details.address, Validators.required],
          Website: [this.details.Website, Validators.required]
        });
      },
      err => this.errorHandler(err, 'Failed to get University Details!'));
    });
  }


  // tslint:disable-next-line: typedef
  BackBtnHanlder() {
    this.router.navigate(['admin', 'universities']);
  }

  // tslint:disable-next-line: typedef
  private errorHandler(error: any, message: string) {
    this.snackBar.open(message, 'err', {
      duration: 2000
    });
  }

}
