import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../home/core/admin/services/auth.service';
import { AdminComponent } from './admin.component';
import { UniversityDetailsComponent } from './components/university-details/university-details.component';
import { IndexComponent } from './index/index.component';
import { UniversitiesComponent } from './universities/universities.component';
import { UniversityFormComponent } from './university-form/university-form.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthService],
    component: AdminComponent,
    children: [
  {
    path: '',
    canActivate: [AuthService],
    component: IndexComponent
  },
  {
    path: 'universities/new',
    canActivate: [AuthService],
    component: UniversityFormComponent
  },
  {
    path: 'universities/info/:id/:name',
    canActivate: [AuthService],
    component: UniversityDetailsComponent
  },
  {
    path: 'universities/:id',
    canActivate: [AuthService],
    component: UniversityFormComponent
  },
  {
    path: 'universities',
    canActivate: [AuthService],
    component: UniversitiesComponent
  },
  {
    path: 'users',
    canActivate: [AuthService],
    component: UsersComponent
  }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
