import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { JwtService } from 'src/app/home/core/User/services/jwt.service';
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
        url: '/user',
        icon: 'home'
      },
      {
        name: 'Universities',
        url: '/user/universities',
        icon: 'apartment'
      }
    ];


  constructor(
    private jwtService: JwtService,
    private router: Router,
    private breakpointObserver: BreakpointObserver) {}

// tslint:disable-next-line: typedef
logout(){
  this.jwtService.destroyToken();
  this.router.navigate(['/userLogin']);
}

}

