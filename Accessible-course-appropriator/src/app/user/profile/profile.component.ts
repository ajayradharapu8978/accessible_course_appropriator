import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.id = window.localStorage.getItem('userId');
    this.profileData();
  }

  // tslint:disable-next-line: typedef
  profileData(){
    this.userService.getProfileDetails(this.id).subscribe(data => {
      console.log(data);
    });
  }

}
