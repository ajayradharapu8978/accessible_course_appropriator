import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from './admin/services/admin.service';
import { AuthService } from './admin/services/auth.service';
import { NoAuthGuardService } from './admin/services/no-auth-guard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AdminService,
    AuthService,
    NoAuthGuardService
  ]
})
export class AdminCoreModule { }
