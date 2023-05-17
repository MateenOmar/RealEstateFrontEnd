import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedInUser!: string;
  constructor(private alertify: AlertifyService) {}

  ngOnInit() {}

  loggedIn() {
    this.loggedInUser = localStorage.getItem('username')!;
    return this.loggedInUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.alertify.success('You have been logged out!');
  }
}
