import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../core/User/services/auth.service';
import { JwtService } from '../core/User/services/jwt.service';
import { PasswordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  hide = true;
  loginForm: any;
  regForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private jwtservice: JwtService,
    private router: Router,
    private snackBar: MatSnackBar
    ){  }

  ngOnInit(): void{
    this.loginForm = this.formBuilder;
    this.regForm = this.formBuilder;
    this.initForm();
  }

  // tslint:disable-next-line: typedef
  private initForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    // tslint:disable-next-line: deprecation
    this.regForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: PasswordChecker('password', 'confirmPassword'),
    });
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    if (!this.regForm.valid) {
      return;
    }
    this.authService.signup(this.regForm.value).subscribe((data) => {
      this.router.navigate(['/userLogin']);
      this.snackBar.open('registered Successfully', 'ok', {
        duration: 3000
      });
      this.regForm.reset();
    },
    err => this.errorHandler(err, 'Oops something went Wrong!'));
  }

  // tslint:disable-next-line: typedef
  onClick(){
    this.authService.login(this.loginForm.value).subscribe((data) => {
      window.localStorage.setItem('userId', data.id);
      this.jwtservice.setToken(data.token);
      this.router.navigate(['/user']);
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
