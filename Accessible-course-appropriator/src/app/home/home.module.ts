import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCoreModule } from './core/admin-core.module';
import { UserCoreModule } from './core/user-core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from '../shared/material.module';
import { IndexComponent } from './index/index.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    IndexComponent,
    UserLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    UserCoreModule,
    AdminCoreModule,
    HomeRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
