import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    links = [
      {
        name: 'Home',
        url: '/admin',
        icon: 'home'
      },
      {
        name: 'Universities',
        url: '/admin/universities',
        icon: 'apartment'
      },
      {
        name: 'Users',
        url: 'users',
        icon: 'groups'
      }
    ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {}

  // tslint:disable-next-line: typedef
  logout(){
    window.localStorage.removeItem('id');
    this.router.navigate(['/adminLogin']);
    }

}
