import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../core/admin/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm: any;
  ID: any;

  constructor(
    private formBuilder: FormBuilder,
    private Service: AdminService,
    private router: Router,
    private snackBar: MatSnackBar
    ){  }

  ngOnInit(): void{
    this.loginForm = this.formBuilder;
    this.initForm();
  }

  // tslint:disable-next-line: typedef
  private initForm(){
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  onClick(){
    this.Service.login(this.loginForm.value).subscribe((data) => {
      this.ID = data;
      window.localStorage.setItem('id', this.ID.result);
      this.router.navigate(['/admin']);
    },
    err => this.errorHandler(err, 'Oops something went Wrong!'));
  }

  // tslint:disable-next-line: typedef
  private errorHandler(error: any, message: string) {
    this.snackBar.open(message, 'err', {
      duration: 2000
    });
  }

}
