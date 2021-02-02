import { UsersService } from './../services/users.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements AfterViewInit {

  dataSource: any;
  pageLength = 0;
  pageSize = 10;
  currentPage = 1;

  displayedColumns: string[] = ['userName', 'email', 'createdAt', 'updatedAt'];

  constructor(
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) { }

  // @ViewChild(MatSort) sort: MatSort | undefined;

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.usersData();
    // this.Data.sort = this.sort;
  }

  // tslint:disable-next-line: typedef
  usersData() {
    this.userService.getUsers(this.pageSize, this.currentPage).subscribe(data => {
      this.userService.users = data as User[];
      this.dataSource = this.userService.users;
      // this.dataSource = new MatTableDataSource(this.userService.users);
      this.pageLength = this.dataSource.maxUsers;
      this.dataSource = this.dataSource.users;
    });
  }

  // tslint:disable-next-line: typedef
  applyFilter($event: any) {
    const filterValue = $event.target.value.trim();
    this.dataSource.filter = filterValue.toLowerCase();
  }

  // tslint:disable-next-line: typedef
  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    this.userService.getUsers(this.pageSize, this.currentPage).subscribe(data => {
      this.userService.users = data as User[];
      this.dataSource = this.userService.users;
      this.pageLength = this.dataSource.maxUsers;
      this.dataSource = this.dataSource.users;
    });
  }

}
