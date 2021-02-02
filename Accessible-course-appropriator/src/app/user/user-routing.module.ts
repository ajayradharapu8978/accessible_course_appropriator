import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../home/core/User/services/auth-guard.service';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { UniversitiesComponent } from './universities/universities.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: UserComponent,
    children: [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: IndexComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    component: ProfileComponent
  },
  {
    path: 'universities',
    canActivate: [AuthGuardService],
    component: UniversitiesComponent
  }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
