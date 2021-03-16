import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarWidth: number = 0;
  @Input() sideWidth: number = 0;
  @Output() widthChanged = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  toggleSidebar() {
    this.widthChanged.emit(this.sideWidth);
    if (this.sidebarWidth == 200) {
      this.sidebarWidth = 0;
      this.sideWidth = 0;
      return console.log(this.sidebarWidth);
    } else {
      this.sidebarWidth = 200;
      this.sideWidth = 200;
      return console.log(this.sidebarWidth);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate([`/`]);
  }

}
