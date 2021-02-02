import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
        url: '',
        icon: 'house'
      },
      {
        name: 'Admin',
        url: 'adminLogin',
        icon: 'admin_panel_settings'
      },
      {
        name: 'User',
        url: 'userLogin',
        icon: 'account_circle'
      }
    ];

  constructor(private breakpointObserver: BreakpointObserver) {}

}
