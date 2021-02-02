import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NoAuthGuardService } from './core/admin/services/no-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [NoAuthGuardService],
    children: [
  {
    path: '',
    canActivate: [NoAuthGuardService],
    component: IndexComponent
  },
  {
    path: 'userLogin',
    canActivate: [NoAuthGuardService],
    component: UserLoginComponent
  },
  {
    path: 'adminLogin',
    canActivate: [NoAuthGuardService],
    component: AdminLoginComponent
  },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
