import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { IndexComponent } from './index/index.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UniversitiesComponent } from './universities/universities.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { UniversityFormComponent } from './university-form/university-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniversityDetailsComponent } from './components/university-details/university-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    IndexComponent,
    UniversitiesComponent,
    UsersComponent,
    UniversityFormComponent,
    UniversityDetailsComponent,
    CoursesComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
