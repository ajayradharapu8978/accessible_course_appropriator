import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
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
import { ProfileComponent } from './profile/profile.component';
import { UniversitiesComponent } from './universities/universities.component';
import { UserComponent } from './user.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    NavComponent,
    IndexComponent,
    ProfileComponent,
    UniversitiesComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MaterialModule
  ]
})
export class UserModule { }
