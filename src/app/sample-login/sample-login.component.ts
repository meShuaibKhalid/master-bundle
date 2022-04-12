import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-login',
  templateUrl: './sample-login.component.html',
  styleUrls: ['./sample-login.component.scss']
})
export class SampleLoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginValid = true
  }

}
