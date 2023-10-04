import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  mybreakpoint: number;
  constructor() {
    this.mybreakpoint = (window.innerWidth <= 768) ? 1 : 6;
   }
  ngOnInit() {
  
  }

  handleSize(event: Event) {
    const target = event.target as Window;
    this.mybreakpoint = (target.innerWidth <= 768) ? 1 : 6;
  }
}
