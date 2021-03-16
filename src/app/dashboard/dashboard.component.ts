import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Counter = 0;
  clicks = localStorage.getItem('clickCounter');

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.clicks != "login") {
      this.router.navigate([`/`]);
    }
  }

  widthChangedHandler(sideWidth: number) {
    if (this.Counter == 0) {
      this.Counter = 200;
    } else {
      this.Counter = 0;
    }
  }

}
