import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { customNavigation } from './data';
import { CustomNavigationInterface } from './interfaces/custom-navigation.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-bundle';
  titleData = customNavigation;

  constructor(private readonly titleService: Title, private readonly router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.titleData.forEach((parentRoute: CustomNavigationInterface) => {
          (parentRoute.collapsable) ? 
          parentRoute.children.forEach(childrenRoute => (childrenRoute.link === event.url) ? 
          this.titleService.setTitle(childrenRoute.title): null) : 
          (parentRoute.link === event.url) ? 
          this.titleService.setTitle(parentRoute.title): null;
        })
      }
    });
  }

}
