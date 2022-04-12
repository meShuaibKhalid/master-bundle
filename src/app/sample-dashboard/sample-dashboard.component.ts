import { Component, OnInit } from '@angular/core';
import { SALES_TILE_DASHBOARD } from '../constants/constants';

@Component({
  selector: 'app-sample-dashboard',
  templateUrl: './sample-dashboard.component.html',
  styleUrls: ['./sample-dashboard.component.scss']
})
export class SampleDashboardComponent implements OnInit{
  salesData = SALES_TILE_DASHBOARD;
  constructor() {}

  ngOnInit(): void {
  }
}
