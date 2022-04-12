import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { customNavigation } from '../data';

@Component({
  selector: 'app-custom-navigation',
  templateUrl: './app-custom-navigation.component.html',
  styleUrls: ['./app-custom-navigation.component.scss']
})
export class CustomNavigation implements OnInit {
  customNavigation = customNavigation;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToUrl(event: any){
    this.router.navigate([event]);
  }
}
