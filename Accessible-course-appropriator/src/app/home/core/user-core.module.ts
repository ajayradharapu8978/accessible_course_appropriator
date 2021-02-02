import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuardService } from './User/services/auth-guard.service';
import { AuthService } from './User/services/auth.service';
import { JwtService } from './User/services/jwt.service';
import { TokenInterceptorService } from './User/services/token-interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    JwtService,
    TokenInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class UserCoreModule { }
