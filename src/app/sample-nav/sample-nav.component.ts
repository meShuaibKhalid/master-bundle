import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sample-nav',
  templateUrl: './sample-nav.component.html',
  styleUrls: ['./sample-nav.component.scss']
})
export class SampleNavComponent {
  sideBar: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleDrawer(){
    this.sideBar = !this.sideBar
  }

}
