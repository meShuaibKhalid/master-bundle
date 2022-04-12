import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { customNavigation } from '../data';

@Component({
  selector: 'app-custom-horizontal-navigation',
  templateUrl: './custom-horizontal-navigation.component.html',
  styleUrls: ['./custom-horizontal-navigation.component.scss']
})
export class CustomHorizontalNavigation implements OnInit {
  customNavigation = customNavigation;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToUrl(event: any){
    console.log('event: ', event);
    this.router.navigate([event]);
  }
}
