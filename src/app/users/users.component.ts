import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Counter = 0;
  
  headers = ["", "Name", "Status", "Role"];
  rows: any = [{
    "": "admin1@meditab.com",
    Name: "Admin 1 Sample",
    Status: "Active",
    Role: "Admin"
  }, {
    "": "admin2@meditab.com",
    Name: "Admin 2 Sample",
    Status: "Active",
    Role: "Admin"
  }, {
    "": "trainee1@meditab.com",
    Name: "Trainee 1 Sample",
    Status: "Active",
    Role: "Trainee"
  }, {
    "": "trainee2@meditab.com",
    Name: "Trainee 2 Sample",
    Status: "Active",
    Role: "Trainee"
  }, {
    "": "trainee3@meditab.com",
    Name: "Trainee 3 Sample",
    Status: "Active",
    Role: "Trainee"
  }, {
    "": "trainee4@meditab.com",
    Name: "Trainee 4 Sample",
    Status: "Active",
    Role: "Trainee"
  }, {
    "": "trainee5@meditab.com",
    Name: "Trainee 5 Sample",
    Status: "Active",
    Role: "Trainee"
  }, {
    "": "trainee6@meditab.com",
    Name: "Trainee 6 Sample",
    Status: "Active",
    Role: "Trainee"
  }];

  clicks = localStorage.getItem('clickCounter');

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.clicks);
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
